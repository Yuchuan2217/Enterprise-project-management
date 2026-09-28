import { verifyToken } from "../security/token.js";

export function requireAuth(request, _response, next) {
  try {
    const authorization = request.headers.authorization || "";
    const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
    request.auth = verifyToken(token);
    next();
  } catch {
    const error = new Error("请先登录");
    error.status = 401;
    next(error);
  }
}

export function requireRole(...roles) {
  return (request, _response, next) => {
    if (roles.includes(request.auth?.role)) {
      next();
      return;
    }
    const error = new Error("当前账号没有操作权限");
    error.status = 403;
    next(error);
  };
}
