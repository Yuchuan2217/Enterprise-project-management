import { app } from "./src/app.js";
import { config } from "./src/config.js";
import { pool } from "./src/db.js";

async function start() {
  try {
    await pool.query("SELECT 1");
  } catch (error) {
    console.error("MySQL 连接失败：", error.message);
    process.exit(1);
  }

  const server = app.listen(config.port, () => {
    console.log(`企业项目管理服务已启动：http://localhost:${config.port}`);
    console.log(`登录入口：http://localhost:${config.port}/login.html`);
    console.log(`健康检查：http://localhost:${config.port}/api/health`);
  });

  const shutdown = async () => {
    server.close(async () => {
      await pool.end();
      process.exit(0);
    });
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

start();
