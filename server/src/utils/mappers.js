function parseJsonArray(value) {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

export function mapUser(row) {
  return {
    id: Number(row.id),
    name: row.display_name,
    account: row.username,
    role: row.role_label,
    roleCode: row.role,
    teamId: row.team_id === null ? null : Number(row.team_id),
    teamName: row.team_name || "未分配团队",
    managerId: row.manager_id === null ? null : Number(row.manager_id),
    managerName: row.manager_name || "未设置",
    projectIds: parseJsonArray(row.project_ids).map(Number),
    status: row.status,
    email: row.email
  };
}

export function mapTeam(row, members = []) {
  const leader = members.find((member) => Number(member.id) === Number(row.leader_id));
  return {
    id: Number(row.id),
    name: row.name,
    leaderId: row.leader_id === null ? null : Number(row.leader_id),
    leaderName: leader?.name || null,
    memberIds: members.map((member) => Number(member.id)),
    members
  };
}

export function mapMilestone(row) {
  return {
    id: Number(row.id),
    label: row.label,
    date: row.due_date,
    state: row.state,
    sortOrder: Number(row.sort_order || 0)
  };
}

export function mapProject(row, milestones = []) {
  return {
    id: Number(row.id),
    name: row.name,
    code: row.code,
    ownerId: Number(row.owner_id),
    owner: row.owner_name,
    ownerInitial: row.owner_name?.slice(0, 1) || "",
    progress: Number(row.progress || 0),
    due: `${row.end_date.slice(5, 7)} 月 ${row.end_date.slice(8, 10)} 日`,
    dueIso: row.end_date,
    status: row.status,
    statusLabel: row.status_label,
    stateLabel: row.stage,
    departmentId: row.department_id === null ? null : Number(row.department_id),
    department: row.department_name || "未设置",
    type: row.type,
    priority: row.priority === "high" ? "高" : row.priority === "low" ? "低" : "中",
    color: row.color,
    colorSoft: row.color_soft,
    schedule: {
      start: `${row.start_date}T09:00:00`,
      end: `${row.end_date}T18:00:00`
    },
    budget: `${Number(row.budget_percent || 0)}%`,
    members: Number(row.member_count || 0),
    issue: row.status === "risk" || row.status === "late" ? row.description || "" : "",
    description: row.description || "",
    milestones,
    activity:
      row.status === "risk" || row.status === "late"
        ? [row.description || "项目存在风险，请关注最新进展"]
        : ["项目进度已更新"]
  };
}
