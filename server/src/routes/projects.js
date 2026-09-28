import { Router } from "express";
import { pool, withTransaction } from "../db.js";
import { asyncHandler, httpError } from "../middleware/error.js";
import { mapMilestone, mapProject } from "../utils/mappers.js";

export const projectsRouter = Router();

const statusLabels = {
  normal: "正常",
  risk: "风险",
  late: "临近到期",
  done: "已完成"
};

const priorityToDatabase = {
  高: "high",
  high: "high",
  中: "medium",
  medium: "medium",
  低: "low",
  low: "low"
};

async function getMilestones(projectId, connection = pool) {
  const [rows] = await connection.query(
    "SELECT * FROM milestones WHERE project_id = ? ORDER BY sort_order, id",
    [projectId]
  );
  return rows.map(mapMilestone);
}

async function getProjectById(projectId, connection = pool) {
  const [rows] = await connection.query(
    `SELECT p.*, u.display_name AS owner_name, d.name AS department_name,
      (SELECT COUNT(*) FROM project_members pm WHERE pm.project_id = p.id) AS member_count
     FROM projects p
     JOIN users u ON u.id = p.owner_id
     LEFT JOIN departments d ON d.id = p.department_id
     WHERE p.id = ?
     LIMIT 1`,
    [projectId]
  );
  if (!rows[0]) return null;
  return mapProject(rows[0], await getMilestones(projectId, connection));
}

async function resolveOwnerId(connection, ownerId, ownerName) {
  if (ownerId !== undefined && ownerId !== null && ownerId !== "") return Number(ownerId);
  const name = String(ownerName || "").trim();
  if (!name) throw httpError(400, "请选择项目负责人");
  const [rows] = await connection.query(
    "SELECT id FROM users WHERE display_name = ? AND status <> 'disabled' LIMIT 1",
    [name]
  );
  if (!rows[0]) throw httpError(400, "项目负责人不存在");
  return Number(rows[0].id);
}

async function resolveDepartmentId(connection, departmentId, departmentName) {
  if (departmentId !== undefined && departmentId !== null && departmentId !== "") {
    return Number(departmentId);
  }
  const name = String(departmentName || "").trim();
  if (!name) return null;
  const [rows] = await connection.query("SELECT id FROM departments WHERE name = ? LIMIT 1", [
    name
  ]);
  if (rows[0]) return Number(rows[0].id);
  const [result] = await connection.query("INSERT INTO departments (name) VALUES (?)", [name]);
  return Number(result.insertId);
}

async function replaceMilestones(connection, projectId, milestones = []) {
  await connection.query("DELETE FROM milestones WHERE project_id = ?", [projectId]);
  for (const [index, milestone] of milestones.entries()) {
    const label = String(milestone.label || "").trim();
    if (!label || !milestone.date) continue;
    await connection.query(
      `INSERT INTO milestones (project_id, label, due_date, state, sort_order)
       VALUES (?, ?, ?, ?, ?)`,
      [
        projectId,
        label,
        milestone.date,
        ["todo", "current", "done"].includes(milestone.state) ? milestone.state : "todo",
        index + 1
      ]
    );
  }
}

projectsRouter.get(
  "/",
  asyncHandler(async (request, response) => {
    const keyword = String(request.query.keyword || "").trim();
    const status = String(request.query.status || "").trim();
    const params = [];
    const conditions = [];

    if (keyword) {
      conditions.push("(p.name LIKE ? OR p.code LIKE ? OR u.display_name LIKE ?)");
      const value = `%${keyword}%`;
      params.push(value, value, value);
    }
    if (status && status !== "all") {
      if (status === "risk") {
        conditions.push("p.status IN ('risk', 'late')");
      } else {
        conditions.push("p.status = ?");
        params.push(status);
      }
    }

    const [rows] = await pool.query(
      `SELECT p.*, u.display_name AS owner_name, d.name AS department_name,
        (SELECT COUNT(*) FROM project_members pm WHERE pm.project_id = p.id) AS member_count
       FROM projects p
       JOIN users u ON u.id = p.owner_id
       LEFT JOIN departments d ON d.id = p.department_id
       ${conditions.length ? `WHERE ${conditions.join(" AND ")}` : ""}
       ORDER BY p.end_date, p.id`,
      params
    );
    response.json({ projects: rows.map((row) => mapProject(row)) });
  })
);

projectsRouter.get(
  "/:id",
  asyncHandler(async (request, response) => {
    const project = await getProjectById(request.params.id);
    if (!project) throw httpError(404, "项目不存在");
    response.json({ project });
  })
);

projectsRouter.post(
  "/",
  asyncHandler(async (request, response) => {
    const body = request.body;
    if (!body.name || !body.endDate) throw httpError(400, "项目名称和计划交付日期不能为空");

    const projectId = await withTransaction(async (connection) => {
      const ownerId = await resolveOwnerId(connection, body.ownerId, body.owner);
      const departmentId = await resolveDepartmentId(
        connection,
        body.departmentId,
        body.department
      );
      const priority = priorityToDatabase[body.priority] || "medium";
      const status = Object.hasOwn(statusLabels, body.status) ? body.status : "normal";
      const code = body.code || `PRJ-${Date.now().toString().slice(-6)}`;

      const [result] = await connection.query(
        `INSERT INTO projects
          (code, name, owner_id, department_id, type, stage, status, status_label,
           priority, progress, budget_percent, start_date, end_date, description, color, color_soft)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          code,
          body.name,
          ownerId,
          departmentId,
          body.type || "业务系统",
          body.stage || "需求分析",
          status,
          body.statusLabel || statusLabels[status],
          priority,
          Number(body.progress || 0),
          Number(String(body.budget || "0").replace("%", "")),
          body.startDate || new Date().toISOString().slice(0, 10),
          body.endDate,
          body.description || null,
          body.color || "#0969DA",
          body.colorSoft || "#E7F1FD"
        ]
      );

      const id = Number(result.insertId);
      if (Array.isArray(body.milestones)) {
        await replaceMilestones(connection, id, body.milestones);
      }
      return id;
    });

    response.status(201).json({ project: await getProjectById(projectId) });
  })
);

projectsRouter.put(
  "/:id",
  asyncHandler(async (request, response) => {
    const projectId = Number(request.params.id);
    const body = request.body;

    await withTransaction(async (connection) => {
      const [rows] = await connection.query("SELECT * FROM projects WHERE id = ? FOR UPDATE", [
        projectId
      ]);
      const existing = rows[0];
      if (!existing) throw httpError(404, "项目不存在");

      const ownerId = await resolveOwnerId(
        connection,
        body.ownerId ?? existing.owner_id,
        body.owner
      );
      const departmentId = await resolveDepartmentId(
        connection,
        body.departmentId ?? existing.department_id,
        body.department
      );
      const priority = priorityToDatabase[body.priority] || existing.priority;
      const status = Object.hasOwn(statusLabels, body.status) ? body.status : existing.status;

      await connection.query(
        `UPDATE projects SET
          name = ?, owner_id = ?, department_id = ?, type = ?, stage = ?, status = ?,
          status_label = ?, priority = ?, progress = ?, budget_percent = ?,
          start_date = ?, end_date = ?, description = ?, color = ?, color_soft = ?
         WHERE id = ?`,
        [
          body.name ?? existing.name,
          ownerId,
          departmentId,
          body.type ?? existing.type,
          body.stage ?? existing.stage,
          status,
          body.statusLabel ?? statusLabels[status],
          priority,
          Number(body.progress ?? existing.progress),
          Number(String(body.budget ?? existing.budget_percent).replace("%", "")),
          body.startDate ?? existing.start_date,
          body.endDate ?? existing.end_date,
          body.description ?? existing.description,
          body.color ?? existing.color,
          body.colorSoft ?? existing.color_soft,
          projectId
        ]
      );

      if (Array.isArray(body.milestones)) {
        await replaceMilestones(connection, projectId, body.milestones);
      }
    });

    response.json({ project: await getProjectById(projectId) });
  })
);

projectsRouter.delete(
  "/:id",
  asyncHandler(async (request, response) => {
    const [result] = await pool.query("DELETE FROM projects WHERE id = ?", [request.params.id]);
    if (!result.affectedRows) throw httpError(404, "项目不存在");
    response.status(204).end();
  })
);

projectsRouter.post(
  "/:id/milestones",
  asyncHandler(async (request, response) => {
    const projectId = Number(request.params.id);
    const label = String(request.body.label || "").trim();
    if (!label || !request.body.date) throw httpError(400, "里程碑名称和日期不能为空");
    const [orderRows] = await pool.query(
      "SELECT COALESCE(MAX(sort_order), 0) + 1 AS next_order FROM milestones WHERE project_id = ?",
      [projectId]
    );
    const [result] = await pool.query(
      `INSERT INTO milestones (project_id, label, due_date, state, sort_order)
       VALUES (?, ?, ?, ?, ?)`,
      [
        projectId,
        label,
        request.body.date,
        ["todo", "current", "done"].includes(request.body.state) ? request.body.state : "todo",
        orderRows[0].next_order
      ]
    );
    response.status(201).json({ id: Number(result.insertId) });
  })
);

projectsRouter.put(
  "/:id/milestones/:milestoneId",
  asyncHandler(async (request, response) => {
    const [result] = await pool.query(
      `UPDATE milestones SET label = ?, due_date = ?, state = ?, sort_order = ?
       WHERE id = ? AND project_id = ?`,
      [
        request.body.label,
        request.body.date,
        request.body.state,
        Number(request.body.sortOrder || 0),
        request.params.milestoneId,
        request.params.id
      ]
    );
    if (!result.affectedRows) throw httpError(404, "里程碑不存在");
    response.status(204).end();
  })
);

projectsRouter.delete(
  "/:id/milestones/:milestoneId",
  asyncHandler(async (request, response) => {
    const [result] = await pool.query(
      "DELETE FROM milestones WHERE id = ? AND project_id = ?",
      [request.params.milestoneId, request.params.id]
    );
    if (!result.affectedRows) throw httpError(404, "里程碑不存在");
    response.status(204).end();
  })
);
