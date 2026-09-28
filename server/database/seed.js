import { pool, withTransaction } from "../src/db.js";
import { hashPassword } from "../src/security/password.js";
import { seedAssets } from "./asset-seed.js";

const departments = [
  [1, "数字科技部"],
  [2, "供应链中心"],
  [3, "客户运营部"],
  [4, "国际业务部"],
  [5, "采购中心"],
  [6, "客户服务中心"],
  [7, "财务部"],
  [8, "人力资源部"]
];

const teams = [
  [1, "项目管理办公室", 1],
  [2, "业务交付一组", 3],
  [3, "数据与智能组", 4],
  [4, "质量与安全组", 8]
];

const users = [
  [0, "admin", "系统管理员", "super_admin", "超级管理员", "admin@company.com", "active", null, null],
  [1, "gu.qingyang", "顾清扬", "program_manager", "项目群负责人", "gu.qingyang@company.com", "active", 1, 0],
  [2, "lin.yue", "林悦", "senior_project_manager", "高级项目经理", "lin.yue@company.com", "active", 1, 1],
  [3, "zhou.yuan", "周远", "project_manager", "项目经理", "zhou.yuan@company.com", "active", 2, 1],
  [4, "he.ning", "贺宁", "data_product_manager", "数据产品经理", "he.ning@company.com", "active", 3, 1],
  [5, "chen.si", "陈思", "delivery_manager", "交付经理", "chen.si@company.com", "active", 2, 3],
  [6, "luo.qi", "罗琪", "product_manager", "产品经理", "luo.qi@company.com", "active", 3, 4],
  [7, "zhao.he", "赵禾", "ai_product_manager", "AI 产品经理", "zhao.he@company.com", "active", 3, 4],
  [8, "zheng.hai", "郑海", "quality_security_lead", "安全与质量负责人", "zheng.hai@company.com", "active", 4, 0],
  [9, "tang.ke", "唐可", "qa_lead", "测试负责人", "tang.ke@company.com", "probation", 4, 8]
];

const projects = [
  [1, "DMP-02", "数据中台二期", 2, 1, "数据平台", "开发实施", "risk", "风险", "high", 72, 81, "2026-09-15", "2026-10-18", "研发资源缺口 2 人，接口联调比原计划晚 3 天。", "#0969DA", "#E7F1FD"],
  [2, "WMS-HD", "华东仓储升级", 3, 2, "业务系统", "验收交付", "normal", "正常", "high", 86, 74, "2026-09-10", "2026-09-30", "华东仓现场验收与正式切换。", "#0F8A72", "#E5F4EF"],
  [3, "MDM-01", "客户主数据治理", 4, 3, "数据治理", "方案设计", "risk", "待决策", "medium", 43, 38, "2026-09-01", "2026-10-14", "跨区域客户合并规则仍待确认。", "#B36814", "#FFF1DD"],
  [4, "GLOBAL-3", "海外站点上线", 5, 4, "基础设施", "验收交付", "late", "临近到期", "high", 91, 93, "2026-09-08", "2026-10-02", "新加坡节点合规材料待法务确认。", "#C13C4D", "#FDEBED"],
  [5, "SRM-02", "供应商协同平台", 6, 5, "业务系统", "开发实施", "normal", "正常", "medium", 64, 57, "2026-09-05", "2026-10-24", "供应商门户与结算接口联调。", "#7656C9", "#EEE9FA"],
  [6, "AICS-01", "智能客服改造", 7, 6, "智能应用", "验收交付", "normal", "待上线", "medium", 96, 96, "2026-08-30", "2026-10-02", "智能客服灰度验证与正式上线。", "#2F7D95", "#E4F1F5"]
];

const milestones = [
  [1, 1, "需求确认", "2026-08-12", "done", 1],
  [2, 1, "架构评审", "2026-09-04", "done", 2],
  [3, 1, "核心接口联调", "2026-10-08", "current", 3],
  [4, 1, "验收上线", "2026-10-18", "todo", 4],
  [5, 2, "现场调研", "2026-08-20", "done", 1],
  [6, 2, "设备联调", "2026-09-12", "done", 2],
  [7, 2, "仓库验收", "2026-09-30", "current", 3],
  [8, 2, "正式切换", "2026-10-06", "todo", 4],
  [9, 3, "数据盘点", "2026-09-01", "done", 1],
  [10, 3, "规则评审", "2026-09-28", "current", 2],
  [11, 3, "清洗试跑", "2026-10-06", "todo", 3],
  [12, 3, "治理验收", "2026-10-14", "todo", 4],
  [13, 4, "基础环境", "2026-09-08", "done", 1],
  [14, 4, "功能验收", "2026-09-22", "done", 2],
  [15, 4, "合规复核", "2026-09-30", "current", 3],
  [16, 4, "正式上线", "2026-10-02", "todo", 4],
  [17, 5, "流程设计", "2026-09-05", "done", 1],
  [18, 5, "供应商门户", "2026-09-26", "done", 2],
  [19, 5, "结算联调", "2026-10-12", "current", 3],
  [20, 5, "试运行", "2026-10-24", "todo", 4],
  [21, 6, "场景梳理", "2026-08-30", "done", 1],
  [22, 6, "模型调优", "2026-09-18", "done", 2],
  [23, 6, "灰度验证", "2026-09-29", "current", 3],
  [24, 6, "正式上线", "2026-10-02", "todo", 4]
];

const projectMembers = [
  [1, 1, "sponsor"],
  [1, 2, "project_manager"],
  [1, 7, "product_manager"],
  [1, 8, "quality_lead"],
  [2, 1, "sponsor"],
  [2, 3, "project_manager"],
  [2, 5, "delivery_manager"],
  [2, 9, "qa_lead"],
  [3, 1, "sponsor"],
  [3, 4, "project_manager"],
  [4, 5, "delivery_manager"],
  [4, 8, "security_lead"],
  [5, 6, "product_manager"],
  [6, 2, "project_manager"],
  [6, 7, "product_manager"],
  [6, 9, "qa_lead"]
];

export async function seedDatabase() {
  const passwordHash = hashPassword("Aa123456");

  await withTransaction(async (connection) => {
    await connection.query("SET SESSION sql_mode = CONCAT(@@sql_mode, ',NO_AUTO_VALUE_ON_ZERO')");

    for (const department of departments) {
      await connection.query(
        `INSERT INTO departments (id, name) VALUES (?, ?)
         ON DUPLICATE KEY UPDATE name = VALUES(name)`,
        department
      );
    }

    for (const team of teams) {
      await connection.query(
        `INSERT INTO teams (id, name, leader_id) VALUES (?, ?, NULL)
         ON DUPLICATE KEY UPDATE name = VALUES(name)`,
        [team[0], team[1]]
      );
    }

    for (const user of users) {
      await connection.query(
        `INSERT INTO users
          (id, username, display_name, role, role_label, email, status, team_id, manager_id, password_hash)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
          username = VALUES(username),
          display_name = VALUES(display_name),
          role = VALUES(role),
          role_label = VALUES(role_label),
          email = VALUES(email),
          status = VALUES(status),
          team_id = VALUES(team_id),
          manager_id = VALUES(manager_id),
          password_hash = VALUES(password_hash)`,
        [...user, passwordHash]
      );
    }

    for (const team of teams) {
      await connection.query("UPDATE teams SET leader_id = ? WHERE id = ?", [team[2], team[0]]);
    }

    for (const project of projects) {
      await connection.query(
        `INSERT INTO projects
          (id, code, name, owner_id, department_id, type, stage, status, status_label,
           priority, progress, budget_percent, start_date, end_date, description, color, color_soft)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
          code = VALUES(code),
          name = VALUES(name),
          owner_id = VALUES(owner_id),
          department_id = VALUES(department_id),
          type = VALUES(type),
          stage = VALUES(stage),
          status = VALUES(status),
          status_label = VALUES(status_label),
          priority = VALUES(priority),
          progress = VALUES(progress),
          budget_percent = VALUES(budget_percent),
          start_date = VALUES(start_date),
          end_date = VALUES(end_date),
          description = VALUES(description),
          color = VALUES(color),
          color_soft = VALUES(color_soft)`,
        project
      );
    }

    for (const milestone of milestones) {
      await connection.query(
        `INSERT INTO milestones
          (id, project_id, label, due_date, state, sort_order)
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
          project_id = VALUES(project_id),
          label = VALUES(label),
          due_date = VALUES(due_date),
          state = VALUES(state),
          sort_order = VALUES(sort_order)`,
        milestone
      );
    }

    for (const membership of projectMembers) {
      await connection.query(
        `INSERT INTO project_members (project_id, user_id, member_role)
         VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE member_role = VALUES(member_role)`,
        membership
      );
    }

    await seedAssets(connection);
  });

  await pool.end();
}
