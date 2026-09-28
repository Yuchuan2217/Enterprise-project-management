import { Router } from "express";
import { pool } from "../db.js";
import { asyncHandler, httpError } from "../middleware/error.js";
import { requireAuth } from "../middleware/auth.js";
import { verifyPassword } from "../security/password.js";
import { createToken } from "../security/token.js";
import { mapUser } from "../utils/mappers.js";

export const authRouter = Router();

authRouter.post(
  "/login",
  asyncHandler(async (request, response) => {
    const username = String(request.body.username || "").trim();
    const password = String(request.body.password || "");
    if (!username || !password) throw httpError(400, "请输入账号和密码");

    const [rows] = await pool.query(
      `SELECT u.*, t.name AS team_name, m.display_name AS manager_name,
        COALESCE((
          SELECT JSON_ARRAYAGG(pm.project_id)
          FROM project_members pm
          WHERE pm.user_id = u.id
        ), JSON_ARRAY()) AS project_ids
       FROM users u
       LEFT JOIN teams t ON t.id = u.team_id
       LEFT JOIN users m ON m.id = u.manager_id
       WHERE u.username = ?
       LIMIT 1`,
      [username]
    );

    const user = rows[0];
    if (!user || !verifyPassword(password, user.password_hash)) {
      throw httpError(401, "账号或密码不正确");
    }
    if (user.status === "disabled") throw httpError(403, "账号已停用");

    response.json({
      token: createToken(user),
      user: mapUser(user)
    });
  })
);

authRouter.get(
  "/me",
  requireAuth,
  asyncHandler(async (request, response) => {
    const [rows] = await pool.query(
      `SELECT u.*, t.name AS team_name, m.display_name AS manager_name,
        COALESCE((
          SELECT JSON_ARRAYAGG(pm.project_id)
          FROM project_members pm
          WHERE pm.user_id = u.id
        ), JSON_ARRAY()) AS project_ids
       FROM users u
       LEFT JOIN teams t ON t.id = u.team_id
       LEFT JOIN users m ON m.id = u.manager_id
       WHERE u.id = ?
       LIMIT 1`,
      [request.auth.sub]
    );
    if (!rows[0]) throw httpError(404, "用户不存在");
    response.json({ user: mapUser(rows[0]) });
  })
);

authRouter.post("/logout", requireAuth, (_request, response) => {
  response.status(204).end();
});
