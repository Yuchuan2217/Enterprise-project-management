import { randomBytes, scryptSync, timingSafeEqual } from "node:crypto";

const KEY_LENGTH = 64;

export function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, KEY_LENGTH).toString("hex");
  return `scrypt$${salt}$${hash}`;
}

export function verifyPassword(password, storedValue) {
  const [algorithm, salt, storedHash] = String(storedValue || "").split("$");
  if (algorithm !== "scrypt" || !salt || !storedHash) return false;

  const calculated = scryptSync(password, salt, KEY_LENGTH);
  const expected = Buffer.from(storedHash, "hex");
  return calculated.length === expected.length && timingSafeEqual(calculated, expected);
}
