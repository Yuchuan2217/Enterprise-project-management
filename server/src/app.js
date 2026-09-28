import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config.js";
import { authRouter } from "./routes/auth.js";
import { assetsRouter } from "./routes/assets.js";
import { calendarRouter } from "./routes/calendar.js";
import { departmentsRouter } from "./routes/departments.js";
import { projectsRouter } from "./routes/projects.js";
import { teamsRouter } from "./routes/teams.js";
import { usersRouter } from "./routes/users.js";
import { requireAuth, requireRole } from "./middleware/auth.js";
import { errorHandler, notFound } from "./middleware/error.js";

const currentFile = fileURLToPath(import.meta.url);
const projectRoot = path.resolve(path.dirname(currentFile), "../..");

export const app = express();

app.disable("x-powered-by");
app.use(
  helmet({
    contentSecurityPolicy: false
  })
);
app.use(
  cors({
    origin: config.corsOrigin === "*" ? true : config.corsOrigin,
    credentials: false
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok", database: config.db.database });
});

app.use("/api/auth", authRouter);
app.use("/api/assets", requireAuth, assetsRouter);
app.use("/api/projects", requireAuth, projectsRouter);
app.use("/api/calendar", requireAuth, calendarRouter);
app.use("/api/departments", requireAuth, departmentsRouter);
app.use("/api/users", requireAuth, requireRole("super_admin"), usersRouter);
app.use("/api/teams", requireAuth, teamsRouter);

app.use(express.static(projectRoot, { extensions: ["html"] }));
app.get("/", (_request, response) => {
  response.sendFile(path.join(projectRoot, "login.html"));
});

app.use("/api", notFound);
app.use(errorHandler);
