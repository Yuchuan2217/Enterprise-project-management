import { Router } from "express";
import { pool } from "../db.js";
import { asyncHandler } from "../middleware/error.js";

export const departmentsRouter = Router();

departmentsRouter.get(
  "/",
  asyncHandler(async (_request, response) => {
    const [rows] = await pool.query("SELECT id, name FROM departments ORDER BY id");
    response.json({
      departments: rows.map((row) => ({ id: Number(row.id), name: row.name }))
    });
  })
);
