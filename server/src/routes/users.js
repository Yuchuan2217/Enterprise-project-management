import { Router } from "express";
import { pool } from "../db.js";
import { asyncHandler, httpError } from "../middleware/error.js";
import { hashPassword } from "../security/password.js";
import { mapUser } from "../utils/mappers.js";

export const usersRouter = Router();

const userSelect = `
  SELECT u.*, t.name AS team_name, m.display_name AS manager_name,
    COALESCE((
      SELECT JSON_ARRAYAGG(pm.project_id)
      FROM project_members pm
      WHERE pm.user_id = u.id
    ), JSON_ARRAY()) AS project_ids
  FROM users u
  LEFT JOIN teams t ON t.id = u.team_id
  LEFT JOIN users m ON m.id = u.manager_id
`;

function normalizeRoleCode(roleCode, roleLabel) {
  return String(roleCode || roleLabel || "project_member")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, "_");
}

usersRouter.get(
  "/",
  asyncHandler(async (request, response) => {
    const keyword = String(request.query.keyword || "").trim();
    const params = [];
    let where = "";
    if (keyword) {
      where = `WHERE u.username LIKE ? OR u.display_name LIKE ? OR u.role_label LIKE ?`;
      const value = `%${keyword}%`;
      params.push(value, value, value);
    }
    const [rows] = await pool.query(`${userSelect} ${where} ORDER BY u.id`, params);
    response.json({ users: rows.map(mapUser) });
  })
);

usersRouter.get(
  "/:id",
  asyncHandler(async (request, response) => {
    const [rows] = await pool.query(`${userSelect} WHERE u.id = ? LIMIT 1`, [request.params.id]);
    if (!rows[0]) throw httpError(404, "用户不存在");
    response.json({ user: mapUser(rows[0]) });
  })
);

usersRouter.post(
  "/",
  asyncHandler(async (request, response) => {
    const {
      name,
      account,
      role,
      roleCode,
      teamId,
      managerId,
      status = "active",
      email,
      password = "Aa123456"
    } = request.body;

    if (!name || !account || !email) throw httpError(400, "姓名、账号和邮箱不能为空");
    if (!/^[A-Za-z0-9._-]{3,24}$/.test(account)) {
      throw httpError(400, "登录账号格式不正确");
    }
    if (String(password).length < 8) throw httpError(400, "密码至少需要 8 位");

    try {
      const [result] = await pool.query(
        `INSERT INTO users
          (display_name, username, role, role_label, email, status, team_id, manager_id, password_hash)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          name,
          account,
          normalizeRoleCode(roleCode, role),
          role || "项目成员",
          email,
          status,
          teamId || null,
          managerId === "" || managerId === undefined ? null : managerId,
          hashPassword(String(password))
        ]
      );
      response.status(201).json({ id: Number(result.insertId) });
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") throw httpError(409, "登录账号或邮箱已存在");
      throw error;
    }
  })
);

usersRouter.put(
  "/:id",
  asyncHandler(async (request, response) => {
    const userId = Number(request.params.id);
    const {
      name,
      account,
      role,
      roleCode,
      teamId,
      managerId,
      status,
      email
    } = request.body;
    if (!name || !account || !email) throw httpError(400, "姓名、账号和邮箱不能为空");

    try {
      const [result] = await pool.query(
        `UPDATE users
         SET display_name = ?, username = ?, role = ?, role_label = ?, team_id = ?,
             manager_id = ?, status = ?, email = ?
         WHERE id = ?`,
        [
          name,
          account,
          normalizeRoleCode(roleCode, role),
          role || "项目成员",
          teamId || null,
          managerId === "" || managerId === undefined ? null : managerId,
          status || "active",
          email,
          userId
        ]
      );
      if (!result.affectedRows) throw httpError(404, "用户不存在");
      response.status(204).end();
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") throw httpError(409, "登录账号或邮箱已存在");
      throw error;
    }
  })
);

usersRouter.delete(
  "/:id",
  asyncHandler(async (request, response) => {
    if (Number(request.params.id) === 0) throw httpError(400, "超级管理员账号不能停用");
    const [result] = await pool.query("UPDATE users SET status = 'disabled' WHERE id = ?", [
      request.params.id
    ]);
    if (!result.affectedRows) throw httpError(404, "用户不存在");
    response.status(204).end();
  })
);
