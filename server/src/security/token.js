import { createHmac, timingSafeEqual } from "node:crypto";
import { config } from "../config.js";

function encode(value) {
  return Buffer.from(JSON.stringify(value)).toString("base64url");
}

function decode(value) {
  return JSON.parse(Buffer.from(value, "base64url").toString("utf8"));
}

function sign(value) {
  return createHmac("sha256", config.tokenSecret).update(value).digest("base64url");
}

export function createToken(user) {
  const now = Math.floor(Date.now() / 1000);
  const header = encode({ alg: "HS256", typ: "JWT" });
  const payload = encode({
    sub: user.id,
    username: user.username,
    role: user.role,
    iat: now,
    exp: now + config.tokenExpiresHours * 60 * 60
  });
  const body = `${header}.${payload}`;
  return `${body}.${sign(body)}`;
}

export function verifyToken(token) {
  const [header, payload, signature] = String(token || "").split(".");
  if (!header || !payload || !signature) throw new Error("Invalid token");

  const body = `${header}.${payload}`;
  const expected = Buffer.from(sign(body));
  const received = Buffer.from(signature);
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) {
    throw new Error("Invalid token signature");
  }

  const parsed = decode(payload);
  if (!parsed.exp || parsed.exp < Math.floor(Date.now() / 1000)) {
    throw new Error("Token expired");
  }

  return parsed;
}
