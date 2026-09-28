export function notFound(request, response) {
  response.status(404).json({
    message: `接口不存在：${request.method} ${request.originalUrl}`
  });
}

export function errorHandler(error, _request, response, _next) {
  const status = error.status || 500;
  if (status >= 500) {
    console.error(error);
  }
  response.status(status).json({
    message: status >= 500 ? "服务器处理失败" : error.message
  });
}

export function asyncHandler(handler) {
  return (request, response, next) => Promise.resolve(handler(request, response, next)).catch(next);
}

export function httpError(status, message) {
  const error = new Error(message);
  error.status = status;
  return error;
}
