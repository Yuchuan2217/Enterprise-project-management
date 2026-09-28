import "dotenv/config";

function numberFromEnv(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export const config = {
  port: numberFromEnv(process.env.PORT, 3000),
  db: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: numberFromEnv(process.env.DB_PORT, 3306),
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "enterprise_pm",
    charset: "utf8mb4",
    timezone: "+08:00",
    connectionLimit: 10
  },
  tokenSecret: process.env.TOKEN_SECRET || "development-only-secret-change-me",
  tokenExpiresHours: numberFromEnv(process.env.TOKEN_EXPIRES_HOURS, 12),
  corsOrigin: process.env.CORS_ORIGIN || "*"
};
