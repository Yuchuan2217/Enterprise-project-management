import { Router } from "express";
import { pool } from "../db.js";
import { asyncHandler } from "../middleware/error.js";

export const calendarRouter = Router();

calendarRouter.get(
  "/",
  asyncHandler(async (request, response) => {
    const month = /^\d{4}-\d{2}$/.test(String(request.query.month || ""))
      ? String(request.query.month)
      : new Date().toISOString().slice(0, 7);
    const [year, monthNumber] = month.split("-").map(Number);
    const monthStart = `${month}-01`;
    const nextMonth = new Date(year, monthNumber, 1);
    const monthEnd = `${nextMonth.getFullYear()}-${String(nextMonth.getMonth() + 1).padStart(
      2,
      "0"
    )}-01`;

    const [rows] = await pool.query(
      `SELECT id, name, color, color_soft, start_date, end_date
       FROM projects
       WHERE start_date < ? AND end_date >= ?
       ORDER BY start_date, id`,
      [monthEnd, monthStart]
    );

    const events = rows.flatMap((project) => {
      const result = [];
      if (project.start_date >= monthStart && project.start_date < monthEnd) {
        result.push({
          projectId: Number(project.id),
          projectName: project.name,
          type: "start",
          date: project.start_date,
          time: "09:00",
          color: project.color,
          colorSoft: project.color_soft
        });
      }
      if (project.end_date >= monthStart && project.end_date < monthEnd) {
        result.push({
          projectId: Number(project.id),
          projectName: project.name,
          type: "end",
          date: project.end_date,
          time: "18:00",
          color: project.color,
          colorSoft: project.color_soft
        });
      }
      return result;
    });

    response.json({ month, events });
  })
);
