import { readdir, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import mysql from "mysql2/promise";
import { config } from "../src/config.js";
import { seedAssets } from "../database/asset-seed.js";

const currentFile = fileURLToPath(import.meta.url);
const serverRoot = path.resolve(path.dirname(currentFile), "..");
const migrationsRoot = path.join(serverRoot, "database", "migrations");

const connection = await mysql.createConnection({
  host: config.db.host,
  port: config.db.port,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
  multipleStatements: true,
  charset: "utf8mb4"
});

try {
  const files = (await readdir(migrationsRoot))
    .filter((file) => file.endsWith(".sql"))
    .sort();

  for (const file of files) {
    const sql = (await readFile(path.join(migrationsRoot, file), "utf8")).replaceAll(
      "__DB_NAME__",
      config.db.database
    );
    await connection.query(sql);
    console.log(`迁移完成：${file}`);
  }

  await seedAssets(connection);
  console.log("资产台账初始数据写入完成");
} catch (error) {
  console.error("数据库迁移失败：", error.message);
  process.exitCode = 1;
} finally {
  await connection.end();
}
