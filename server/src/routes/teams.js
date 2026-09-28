import { Router } from "express";
import { pool, withTransaction } from "../db.js";
import { asyncHandler, httpError } from "../middleware/error.js";
import { mapTeam, mapUser } from "../utils/mappers.js";

export const teamsRouter = Router();

async function getTeam(teamId, connection = pool) {
  const [teamRows] = await connection.query("SELECT * FROM teams WHERE id = ? LIMIT 1", [teamId]);
  if (!teamRows[0]) return null;
  const [memberRows] = await connection.query(
    `SELECT u.*, t.name AS team_name, m.display_name AS manager_name,
      COALESCE((
        SELECT JSON_ARRAYAGG(pm.project_id)
        FROM project_members pm
        WHERE pm.user_id = u.id
      ), JSON_ARRAY()) AS project_ids
     FROM users u
     LEFT JOIN teams t ON t.id = u.team_id
     LEFT JOIN users m ON m.id = u.manager_id
     WHERE u.team_id = ?
     ORDER BY u.id`,
    [teamId]
  );
  return mapTeam(
    teamRows[0],
    memberRows.map(mapUser)
  );
}

teamsRouter.get(
  "/",
  asyncHandler(async (_request, response) => {
    const [rows] = await pool.query("SELECT * FROM teams ORDER BY id");
    const teams = [];
    for (const row of rows) {
      teams.push(await getTeam(row.id));
    }
    response.json({ teams });
  })
);

teamsRouter.post(
  "/",
  asyncHandler(async (request, response) => {
    const name = String(request.body.name || "").trim();
    if (!name) throw httpError(400, "团队名称不能为空");
    const [result] = await pool.query("INSERT INTO teams (name, leader_id) VALUES (?, ?)", [
      name,
      request.body.leaderId || null
    ]);
    response.status(201).json({ id: Number(result.insertId) });
  })
);

teamsRouter.put(
  "/:id",
  asyncHandler(async (request, response) => {
    const teamId = Number(request.params.id);
    const name = String(request.body.name || "").trim();
    const leaderId = request.body.leaderId ? Number(request.body.leaderId) : null;
    const memberIds = new Set((request.body.memberIds || []).map(Number));
    if (leaderId) memberIds.add(leaderId);

    await withTransaction(async (connection) => {
      const [teamRows] = await connection.query("SELECT id FROM teams WHERE id = ? FOR UPDATE", [
        teamId
      ]);
      if (!teamRows[0]) throw httpError(404, "团队不存在");

      if (name) {
        await connection.query("UPDATE teams SET name = ?, leader_id = ? WHERE id = ?", [
          name,
          leaderId,
          teamId
        ]);
      } else {
        await connection.query("UPDATE teams SET leader_id = ? WHERE id = ?", [leaderId, teamId]);
      }

      const [currentMembers] = await connection.query(
        "SELECT id FROM users WHERE team_id = ? FOR UPDATE",
        [teamId]
      );
      for (const member of currentMembers) {
        if (!memberIds.has(Number(member.id))) {
          await connection.query("UPDATE users SET team_id = NULL WHERE id = ?", [member.id]);
        }
      }
      for (const userId of memberIds) {
        await connection.query("UPDATE users SET team_id = ? WHERE id = ?", [teamId, userId]);
      }
    });

    response.json({ team: await getTeam(teamId) });
  })
);

teamsRouter.delete(
  "/:id",
  asyncHandler(async (request, response) => {
    await withTransaction(async (connection) => {
      await connection.query("UPDATE users SET team_id = NULL WHERE team_id = ?", [
        request.params.id
      ]);
      const [result] = await connection.query("DELETE FROM teams WHERE id = ?", [
        request.params.id
      ]);
      if (!result.affectedRows) throw httpError(404, "团队不存在");
    });
    response.status(204).end();
  })
);
