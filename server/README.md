# 企业项目管理后端

## 技术栈

- Node.js 20+
- Express 5
- MySQL 8
- `mysql2`
- 内置 `scrypt` 密码加密
- 基于 HMAC 的访问令牌

## 初始化

1. 安装依赖：

```bash
npm install
```

2. 复制环境变量：

```bash
copy .env.example .env
```

3. 修改 `.env` 中的 MySQL 账号、密码和令牌密钥。

4. 创建数据库并写入初始数据：

```bash
npm run db:init
```

5. 启动服务：

```bash
npm start
```

默认地址：`http://localhost:3000`

超级管理员：

```text
账号：admin
密码：Aa123456
```

## 主要接口

```text
POST   /api/auth/login
GET    /api/auth/me
POST   /api/auth/logout

GET    /api/projects
POST   /api/projects
GET    /api/projects/:id
PUT    /api/projects/:id
DELETE /api/projects/:id
POST   /api/projects/:id/milestones
PUT    /api/projects/:id/milestones/:milestoneId
DELETE /api/projects/:id/milestones/:milestoneId

GET    /api/users
POST   /api/users
GET    /api/users/:id
PUT    /api/users/:id
DELETE /api/users/:id

GET    /api/teams
POST   /api/teams
PUT    /api/teams/:id
DELETE /api/teams/:id

GET    /api/calendar?month=2026-09
GET    /api/departments
GET    /api/assets
POST   /api/assets
PUT    /api/assets/:id
DELETE /api/assets/:id
```

除登录接口外，请在请求头中携带：

```text
Authorization: Bearer <token>
```

## 数据库表

- `departments`
- `users`
- `teams`
- `projects`
- `milestones`
- `project_members`
- `assets`

`npm run db:init` 会重建上述数据表。已有正式数据时不要重复执行，改用 `npm run db:seed`。
