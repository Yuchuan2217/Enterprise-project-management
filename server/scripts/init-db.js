import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import mysql from "mysql2/promise";
import { config } from "../src/config.js";
import { seedDatabase } from "../database/seed.js";

const currentFile = fileURLToPath(import.meta.url);
const serverRoot = path.resolve(path.dirname(currentFile), "..");
const schemaPath = path.join(serverRoot, "database", "schema.sql");
const seedOnly = process.argv.includes("--seed-only");

async function initializeSchema() {
  const sql = (await readFile(schemaPath, "utf8")).replaceAll("__DB_NAME__", config.db.database);
  const connection = await mysql.createConnection({
    host: config.db.host,
    port: config.db.port,
    user: config.db.user,
    password: config.db.password,
    multipleStatements: true,
    charset: "utf8mb4"
  });
  try {
    await connection.query(sql);
    console.log(`数据库 ${config.db.database} 表结构初始化完成`);
  } finally {
    await connection.end();
  }
}

try {
  if (!seedOnly) {
    await initializeSchema();
  }
  await seedDatabase();
  console.log("初始化数据写入完成");
  console.log("超级管理员：admin / Aa123456");
} catch (error) {
  console.error("数据库初始化失败：", error.message);
  process.exitCode = 1;
}
