const projects = [
  {
    id: 1,
    name: "数据中台二期",
    code: "DMP-02",
    owner: "林悦",
    ownerInitial: "林",
    progress: 72,
    due: "10 月 18 日",
    dueIso: "2026-10-18",
    status: "risk",
    statusLabel: "风险",
    stateLabel: "开发实施",
    department: "数字科技部",
    type: "数据平台",
    priority: "高",
    color: "#0969DA",
    colorSoft: "#E7F1FD",
    schedule: { start: "2026-09-15T09:00:00", end: "2026-10-18T18:00:00" },
    budget: "81%",
    members: 12,
    issue: "研发资源缺口 2 人，接口联调比原计划晚 3 天。",
    milestones: [
      { label: "需求确认", date: "08-12", state: "done" },
      { label: "架构评审", date: "09-04", state: "done" },
      { label: "核心接口联调", date: "10-08", state: "current" },
      { label: "验收上线", date: "10-18", state: "todo" }
    ],
    activity: ["接口联调任务新增 3 条阻塞记录", "供应商确认了数据映射清单", "项目周会已更新预算预测"]
  },
  {
    id: 2,
    name: "华东仓储升级",
    code: "WMS-HD",
    owner: "周远",
    ownerInitial: "周",
    progress: 86,
    due: "09 月 30 日",
    dueIso: "2026-09-30",
    status: "normal",
    statusLabel: "正常",
    stateLabel: "验收交付",
    department: "供应链中心",
    type: "业务系统",
    priority: "高",
    color: "#0F8A72",
    colorSoft: "#E5F4EF",
    schedule: { start: "2026-09-10T09:00:00", end: "2026-09-30T18:00:00" },
    budget: "74%",
    members: 9,
    issue: "",
    milestones: [
      { label: "现场调研", date: "08-20", state: "done" },
      { label: "设备联调", date: "09-12", state: "done" },
      { label: "仓库验收", date: "09-30", state: "current" },
      { label: "正式切换", date: "10-06", state: "todo" }
    ],
    activity: ["华东仓首轮验收准备完成", "现场培训完成 83 人", "遗留问题降至 4 条"]
  },
  {
    id: 3,
    name: "客户主数据治理",
    code: "MDM-01",
    owner: "贺宁",
    ownerInitial: "贺",
    progress: 43,
    due: "10 月 14 日",
    dueIso: "2026-10-14",
    status: "risk",
    statusLabel: "待决策",
    stateLabel: "方案设计",
    department: "客户运营部",
    type: "数据治理",
    priority: "中",
    color: "#B36814",
    colorSoft: "#FFF1DD",
    schedule: { start: "2026-09-01T09:00:00", end: "2026-10-14T18:00:00" },
    budget: "38%",
    members: 7,
    issue: "跨区域客户合并规则尚未获得业务负责人签字。",
    milestones: [
      { label: "数据盘点", date: "09-01", state: "done" },
      { label: "规则评审", date: "09-28", state: "current" },
      { label: "清洗试跑", date: "10-06", state: "todo" },
      { label: "治理验收", date: "10-14", state: "todo" }
    ],
    activity: ["业务规则评审推迟到周二", "历史客户重复率完成复核", "数据质量样本已提交"]
  },
  {
    id: 4,
    name: "海外站点上线",
    code: "GLOBAL-3",
    owner: "陈思",
    ownerInitial: "陈",
    progress: 91,
    due: "10 月 02 日",
    dueIso: "2026-10-02",
    status: "late",
    statusLabel: "临近到期",
    stateLabel: "验收交付",
    department: "国际业务部",
    type: "基础设施",
    priority: "高",
    color: "#C13C4D",
    colorSoft: "#FDEBED",
    schedule: { start: "2026-09-08T09:00:00", end: "2026-10-02T18:00:00" },
    budget: "93%",
    members: 11,
    issue: "新加坡节点的合规材料仍待法务确认，可能影响灰度窗口。",
    milestones: [
      { label: "基础环境", date: "09-08", state: "done" },
      { label: "功能验收", date: "09-22", state: "done" },
      { label: "合规复核", date: "09-30", state: "current" },
      { label: "正式上线", date: "10-02", state: "todo" }
    ],
    activity: ["灰度环境完成第二轮压测", "法务反馈了 2 项材料补充", "上线值班表已确认"]
  },
  {
    id: 5,
    name: "供应商协同平台",
    code: "SRM-02",
    owner: "罗琪",
    ownerInitial: "罗",
    progress: 64,
    due: "10 月 24 日",
    dueIso: "2026-10-24",
    status: "normal",
    statusLabel: "正常",
    stateLabel: "开发实施",
    department: "采购中心",
    type: "业务系统",
    priority: "中",
    color: "#7656C9",
    colorSoft: "#EEE9FA",
    schedule: { start: "2026-09-05T09:00:00", end: "2026-10-24T18:00:00" },
    budget: "57%",
    members: 8,
    issue: "",
    milestones: [
      { label: "流程设计", date: "09-05", state: "done" },
      { label: "供应商门户", date: "09-26", state: "done" },
      { label: "结算联调", date: "10-12", state: "current" },
      { label: "试运行", date: "10-24", state: "todo" }
    ],
    activity: ["供应商门户完成权限测试", "结算接口进入联调", "首批试点供应商完成培训"]
  },
  {
    id: 6,
    name: "智能客服改造",
    code: "AICS-01",
    owner: "赵禾",
    ownerInitial: "赵",
    progress: 96,
    due: "10 月 02 日",
    dueIso: "2026-10-02",
    status: "normal",
    statusLabel: "待上线",
    stateLabel: "验收交付",
    department: "客户服务中心",
    type: "智能应用",
    priority: "中",
    color: "#2F7D95",
    colorSoft: "#E4F1F5",
    schedule: { start: "2026-08-30T09:00:00", end: "2026-10-02T18:00:00" },
    budget: "96%",
    members: 6,
    issue: "",
    milestones: [
      { label: "场景梳理", date: "08-30", state: "done" },
      { label: "模型调优", date: "09-18", state: "done" },
      { label: "灰度验证", date: "09-29", state: "current" },
      { label: "正式上线", date: "10-02", state: "todo" }
    ],
    activity: ["客服知识库召回率达到目标", "灰度用户反馈已归档", "上线回滚方案完成评审"]
  }
];

const teams = [
  {
    id: 1,
    name: "项目管理办公室",
    leaderId: 1
  },
  {
    id: 2,
    name: "业务交付一组",
    leaderId: 3
  },
  {
    id: 3,
    name: "数据与智能组",
    leaderId: 4
  },
  {
    id: 4,
    name: "质量与安全组",
    leaderId: 8
  }
];

const departments = [
  { id: 1, name: "数字科技部" },
  { id: 2, name: "供应链中心" },
  { id: 3, name: "客户运营部" },
  { id: 4, name: "国际业务部" },
  { id: 5, name: "采购中心" },
  { id: 6, name: "客户服务中心" },
  { id: 7, name: "财务部" },
  { id: 8, name: "人力资源部" }
];

const users = [
  {
    id: 0,
    name: "系统管理员",
    account: "admin",
    role: "超级管理员",
    teamId: null,
    managerId: null,
    projectIds: [],
    status: "active",
    email: "admin@company.com"
  },
  {
    id: 1,
    name: "顾清扬",
    account: "gu.qingyang",
    role: "项目群负责人",
    teamId: 1,
    managerId: 0,
    projectIds: [1, 3],
    status: "active",
    email: "gu.qingyang@company.com"
  },
  {
    id: 2,
    name: "林悦",
    account: "lin.yue",
    role: "高级项目经理",
    teamId: 1,
    managerId: 1,
    projectIds: [1, 6],
    status: "active",
    email: "lin.yue@company.com"
  },
  {
    id: 3,
    name: "周远",
    account: "zhou.yuan",
    role: "项目经理",
    teamId: 2,
    managerId: 1,
    projectIds: [2],
    status: "active",
    email: "zhou.yuan@company.com"
  },
  {
    id: 4,
    name: "贺宁",
    account: "he.ning",
    role: "数据产品经理",
    teamId: 3,
    managerId: 1,
    projectIds: [3],
    status: "active",
    email: "he.ning@company.com"
  },
  {
    id: 5,
    name: "陈思",
    account: "chen.si",
    role: "交付经理",
    teamId: 2,
    managerId: 3,
    projectIds: [4],
    status: "active",
    email: "chen.si@company.com"
  },
  {
    id: 6,
    name: "罗琪",
    account: "luo.qi",
    role: "产品经理",
    teamId: 3,
    managerId: 4,
    projectIds: [5],
    status: "active",
    email: "luo.qi@company.com"
  },
  {
    id: 7,
    name: "赵禾",
    account: "zhao.he",
    role: "AI 产品经理",
    teamId: 3,
    managerId: 4,
    projectIds: [6],
    status: "active",
    email: "zhao.he@company.com"
  },
  {
    id: 8,
    name: "郑海",
    account: "zheng.hai",
    role: "安全与质量负责人",
    teamId: 4,
    managerId: 0,
    projectIds: [1, 4],
    status: "active",
    email: "zheng.hai@company.com"
  },
  {
    id: 9,
    name: "唐可",
    account: "tang.ke",
    role: "测试负责人",
    teamId: 4,
    managerId: 8,
    projectIds: [2, 4, 6],
    status: "probation",
    email: "tang.ke@company.com"
  }
];

const assets = [
  {
    id: 1,
    assetCode: "PC-DT-0001",
    name: "研发办公电脑",
    category: "pc",
    categoryLabel: "台式电脑",
    brand: "Dell",
    model: "OptiPlex 7010",
    serialNumber: "DL-7010-0001",
    departmentId: 1,
    department: "数字科技部",
    ownerId: 2,
    owner: "林悦",
    location: "上海总部 3F-研发区",
    status: "in_use",
    statusLabel: "使用中",
    purchaseDate: "2024-03-12",
    warrantyEnd: "2027-03-11",
    purchasePrice: 6299,
    supplier: "戴尔企业采购",
    ipAddress: "",
    macAddress: "",
    specs: "i7-13700 / 32GB / 1TB SSD / Win11 Pro",
    notes: "研发主力工作站"
  },
  {
    id: 2,
    assetCode: "PC-NB-0002",
    name: "项目经理笔记本",
    category: "laptop",
    categoryLabel: "笔记本",
    brand: "Lenovo",
    model: "ThinkPad T14 Gen 4",
    serialNumber: "LN-T14-0002",
    departmentId: 1,
    department: "数字科技部",
    ownerId: 1,
    owner: "顾清扬",
    location: "上海总部 3F-PMO",
    status: "in_use",
    statusLabel: "使用中",
    purchaseDate: "2024-06-18",
    warrantyEnd: "2027-06-17",
    purchasePrice: 8999,
    supplier: "联想企业采购",
    ipAddress: "",
    macAddress: "",
    specs: "i7-1365U / 32GB / 1TB SSD",
    notes: "移动办公"
  },
  {
    id: 3,
    assetCode: "PC-DT-0003",
    name: "财务办公电脑",
    category: "pc",
    categoryLabel: "台式电脑",
    brand: "HP",
    model: "ProDesk 600 G9",
    serialNumber: "HP-600-0003",
    departmentId: 7,
    department: "财务部",
    ownerId: 0,
    owner: "系统管理员",
    location: "上海总部 2F-财务部",
    status: "in_use",
    statusLabel: "使用中",
    purchaseDate: "2023-11-06",
    warrantyEnd: "2026-11-05",
    purchasePrice: 5499,
    supplier: "惠普企业采购",
    ipAddress: "",
    macAddress: "",
    specs: "i5-13500 / 16GB / 512GB SSD",
    notes: "财务系统专用"
  },
  {
    id: 4,
    assetCode: "PC-NB-0004",
    name: "产品设计笔记本",
    category: "laptop",
    categoryLabel: "笔记本",
    brand: "Apple",
    model: "MacBook Pro 14 M3",
    serialNumber: "AP-MBP-0004",
    departmentId: 3,
    department: "客户运营部",
    ownerId: 6,
    owner: "罗琪",
    location: "上海总部 3F-产品区",
    status: "in_use",
    statusLabel: "使用中",
    purchaseDate: "2024-09-20",
    warrantyEnd: "2027-09-19",
    purchasePrice: 16999,
    supplier: "苹果企业采购",
    ipAddress: "",
    macAddress: "",
    specs: "M3 Pro / 18GB / 512GB SSD",
    notes: "设计及原型制作"
  },
  {
    id: 5,
    assetCode: "SRV-RK-0001",
    name: "数据中台测试服务器",
    category: "server",
    categoryLabel: "服务器",
    brand: "Dell",
    model: "PowerEdge R750",
    serialNumber: "DL-R750-0001",
    departmentId: 1,
    department: "数字科技部",
    ownerId: 7,
    owner: "赵禾",
    location: "上海机房 A02 机柜",
    status: "in_use",
    statusLabel: "使用中",
    purchaseDate: "2023-05-16",
    warrantyEnd: "2028-05-15",
    purchasePrice: 128000,
    supplier: "戴尔企业采购",
    ipAddress: "10.20.1.11",
    macAddress: "00:1B:44:11:3A:B7",
    specs: "2×Xeon Gold / 256GB / 8×1.92TB SSD",
    notes: "数据中台测试环境"
  },
  {
    id: 6,
    assetCode: "SRV-RK-0002",
    name: "应用服务器",
    category: "server",
    categoryLabel: "服务器",
    brand: "HPE",
    model: "ProLiant DL380 Gen11",
    serialNumber: "HP-DL380-0002",
    departmentId: 1,
    department: "数字科技部",
    ownerId: 8,
    owner: "郑海",
    location: "上海机房 A03 机柜",
    status: "in_use",
    statusLabel: "使用中",
    purchaseDate: "2024-01-08",
    warrantyEnd: "2029-01-07",
    purchasePrice: 146000,
    supplier: "新华三集成",
    ipAddress: "10.20.1.12",
    macAddress: "00:1B:44:11:3A:C8",
    specs: "2×Xeon Gold / 512GB / RAID10",
    notes: "核心应用"
  },
  {
    id: 7,
    assetCode: "NET-SW-0001",
    name: "核心交换机",
    category: "switch",
    categoryLabel: "交换机",
    brand: "Cisco",
    model: "Catalyst 9200L-48P",
    serialNumber: "CS-9200-0001",
    departmentId: 1,
    department: "数字科技部",
    ownerId: 8,
    owner: "郑海",
    location: "上海机房 A01 机柜",
    status: "in_use",
    statusLabel: "使用中",
    purchaseDate: "2023-07-21",
    warrantyEnd: "2028-07-20",
    purchasePrice: 36800,
    supplier: "思科授权代理",
    ipAddress: "10.10.1.2",
    macAddress: "00:5F:86:41:22:01",
    specs: "48×1G PoE+ / 4×10G SFP+",
    notes: "总部核心交换"
  },
  {
    id: 8,
    assetCode: "NET-SW-0002",
    name: "办公区接入交换机",
    category: "switch",
    categoryLabel: "交换机",
    brand: "H3C",
    model: "S5130S-28P-EI",
    serialNumber: "H3C-5130-0002",
    departmentId: 1,
    department: "数字科技部",
    ownerId: 8,
    owner: "郑海",
    location: "上海总部 3F 弱电间",
    status: "in_use",
    statusLabel: "使用中",
    purchaseDate: "2024-04-02",
    warrantyEnd: "2029-04-01",
    purchasePrice: 7800,
    supplier: "新华三集成",
    ipAddress: "10.10.20.2",
    macAddress: "00:23:89:55:77:02",
    specs: "24×1G / 4×10G SFP+",
    notes: "3F 办公网络"
  },
  {
    id: 9,
    assetCode: "NET-RT-0001",
    name: "出口路由器",
    category: "router",
    categoryLabel: "路由器",
    brand: "Huawei",
    model: "AR6300-S",
    serialNumber: "HW-AR6300-0001",
    departmentId: 1,
    department: "数字科技部",
    ownerId: 8,
    owner: "郑海",
    location: "上海机房 A01 机柜",
    status: "in_use",
    statusLabel: "使用中",
    purchaseDate: "2023-07-21",
    warrantyEnd: "2028-07-20",
    purchasePrice: 42500,
    supplier: "华为企业业务",
    ipAddress: "10.10.0.1",
    macAddress: "AC:4E:91:23:45:67",
    specs: "双电源 / 双 WAN / 1Gbps 出口",
    notes: "总部互联网出口"
  },
  {
    id: 10,
    assetCode: "NET-FW-0001",
    name: "下一代防火墙",
    category: "firewall",
    categoryLabel: "防火墙",
    brand: "Fortinet",
    model: "FortiGate 100F",
    serialNumber: "FG-100F-0001",
    departmentId: 1,
    department: "数字科技部",
    ownerId: 8,
    owner: "郑海",
    location: "上海机房 A01 机柜",
    status: "in_use",
    statusLabel: "使用中",
    purchaseDate: "2023-07-21",
    warrantyEnd: "2027-07-20",
    purchasePrice: 56800,
    supplier: "网安科技",
    ipAddress: "10.10.0.254",
    macAddress: "70:4C:A5:12:34:56",
    specs: "10G 接口 / 双电源 / IPS+AV",
    notes: "网络边界防护"
  },
  {
    id: 11,
    assetCode: "PRT-LJ-0001",
    name: "财务高速打印机",
    category: "printer",
    categoryLabel: "打印机",
    brand: "HP",
    model: "LaserJet Enterprise M611dn",
    serialNumber: "HP-M611-0001",
    departmentId: 7,
    department: "财务部",
    ownerId: 0,
    owner: "系统管理员",
    location: "上海总部 2F-财务部",
    status: "repair",
    statusLabel: "维修中",
    purchaseDate: "2022-10-11",
    warrantyEnd: "2025-10-10",
    purchasePrice: 12800,
    supplier: "惠普企业采购",
    ipAddress: "10.10.30.21",
    macAddress: "3C:52:82:AA:BB:CC",
    specs: "黑白激光 / 自动双面 / 网络打印",
    notes: "进纸组件待维修"
  },
  {
    id: 12,
    assetCode: "MON-4K-0001",
    name: "设计显示器",
    category: "monitor",
    categoryLabel: "显示器",
    brand: "Dell",
    model: "UltraSharp U2723QE",
    serialNumber: "DL-U2723-0001",
    departmentId: 3,
    department: "客户运营部",
    ownerId: 6,
    owner: "罗琪",
    location: "上海总部 3F-产品区",
    status: "idle",
    statusLabel: "闲置",
    purchaseDate: "2024-09-20",
    warrantyEnd: "2027-09-19",
    purchasePrice: 4299,
    supplier: "戴尔企业采购",
    ipAddress: "",
    macAddress: "",
    specs: "27 英寸 4K / USB-C 90W",
    notes: "备用显示器"
  }
];

const projectTableBody = document.querySelector("#projectTableBody");
const allProjectTableBody = document.querySelector("#allProjectTableBody");
const visibleProjectCounts = [...document.querySelectorAll(".visible-project-count")];
const emptyState = document.querySelector("#emptyState");
const allProjectEmptyState = document.querySelector("#allProjectEmptyState");
const projectSearch = document.querySelector("#projectSearch");
const filterButtons = [...document.querySelectorAll(".filter-button")];
const drawer = document.querySelector("#detailDrawer");
const drawerScrim = document.querySelector("#drawerScrim");
const detailTitle = document.querySelector("#drawerTitle");
const detailOwner = document.querySelector("#drawerOwner");
const detailStatus = document.querySelector("#drawerStatus");
const detailProgress = document.querySelector("#drawerProgress");
const detailProgressBar = document.querySelector("#drawerProgressBar");
const detailDue = document.querySelector("#drawerDue");
const detailBudget = document.querySelector("#drawerBudget");
const detailMembers = document.querySelector("#drawerMembers");
const detailCode = document.querySelector("#drawerCode");
const detailType = document.querySelector("#drawerType");
const detailDepartment = document.querySelector("#drawerDepartment");
const detailPriority = document.querySelector("#drawerPriority");
const detailMilestones = document.querySelector("#drawerMilestones");
const drawerMilestoneCount = document.querySelector("#drawerMilestoneCount");
const drawerIssue = document.querySelector("#drawerIssue");
const drawerActivity = document.querySelector("#drawerActivity");
const sidebar = document.querySelector("#sidebar");
const scrim = document.querySelector("#scrim");
const menuButton = document.querySelector("#menuButton");
const projectDialog = document.querySelector("#projectDialog");
const projectForm = document.querySelector("#projectForm");
const projectFormId = document.querySelector("#projectFormId");
const projectDialogTitle = document.querySelector("#projectDialogTitle");
const projectDialogDescription = document.querySelector("#projectDialogDescription");
const projectFormSubmitButton = document.querySelector("#projectFormSubmitButton");
const milestoneEditor = document.querySelector("#milestoneEditor");
const milestoneEditorList = document.querySelector("#milestoneEditorList");
const addMilestoneRowButton = document.querySelector("#addMilestoneRowButton");
const toast = document.querySelector("#toast");
const exportButton = document.querySelector("#exportButton");
const notificationButton = document.querySelector("#notificationButton");
const viewAllProjectsButton = document.querySelector("#viewAllProjectsButton");
const newProjectListButton = document.querySelector("#newProjectListButton");
const clearProjectListFiltersButton = document.querySelector("#clearProjectListFiltersButton");
const totalProjectMetric = document.querySelector("#totalProjectMetric");
const pageTitle = document.querySelector("#pageTitle");
const pageSubtitle = document.querySelector("#pageSubtitle");
const appViews = [...document.querySelectorAll("[data-view-panel]")];
const viewNavItems = [...document.querySelectorAll("[data-nav]")];
const accountMenuButton = document.querySelector("#accountMenuButton");
const accountMenu = document.querySelector("#accountMenu");
const accountProfileButton = document.querySelector("#accountProfileButton");
const logoutButton = document.querySelector("#logoutButton");
const userTableBody = document.querySelector("#userTableBody");
const userSearch = document.querySelector("#userSearch");
const userTeamFilter = document.querySelector("#userTeamFilter");
const userResultCount = document.querySelector("#userResultCount");
const userEmptyState = document.querySelector("#userEmptyState");
const addUserButton = document.querySelector("#addUserButton");
const userDialog = document.querySelector("#userDialog");
const userForm = document.querySelector("#userForm");
const userFormId = document.querySelector("#userFormId");
const userFormTeam = document.querySelector("#userFormTeam");
const userFormManager = document.querySelector("#userFormManager");
const userFormPassword = document.querySelector("#userFormPassword");
const userDialogTitle = document.querySelector("#userDialogTitle");
const userDialogDescription = document.querySelector("#userDialogDescription");
const userFormSubmitButton = document.querySelector("#userFormSubmitButton");
const closeUserDialogButton = document.querySelector("#closeUserDialogButton");
const cancelUserDialogButton = document.querySelector("#cancelUserDialogButton");
const userDrawer = document.querySelector("#userDrawer");
const userDrawerScrim = document.querySelector("#userDrawerScrim");
const closeUserDrawerButton = document.querySelector("#closeUserDrawerButton");
const userDrawerStatus = document.querySelector("#userDrawerStatus");
const userDrawerTitle = document.querySelector("#userDrawerTitle");
const userDrawerRole = document.querySelector("#userDrawerRole");
const userDrawerAvatar = document.querySelector("#userDrawerAvatar");
const userDrawerAccount = document.querySelector("#userDrawerAccount");
const userDrawerEmail = document.querySelector("#userDrawerEmail");
const userDrawerTeam = document.querySelector("#userDrawerTeam");
const userDrawerManager = document.querySelector("#userDrawerManager");
const userDrawerPosition = document.querySelector("#userDrawerPosition");
const userDrawerAccountStatus = document.querySelector("#userDrawerAccountStatus");
const userDrawerProjectCount = document.querySelector("#userDrawerProjectCount");
const userDrawerProjects = document.querySelector("#userDrawerProjects");
const userDrawerColleagues = document.querySelector("#userDrawerColleagues");
const userTeamButton = document.querySelector("#userTeamButton");
const userEditButton = document.querySelector("#userEditButton");
const editProjectButton = document.querySelector("#editProjectButton");
const teamList = document.querySelector("#teamList");
const teamDialog = document.querySelector("#teamDialog");
const teamForm = document.querySelector("#teamForm");
const teamDialogTitle = document.querySelector("#teamDialogTitle");
const teamFormId = document.querySelector("#teamFormId");
const teamFormLeader = document.querySelector("#teamFormLeader");
const teamMemberPicker = document.querySelector("#teamMemberPicker");
const closeTeamDialogButton = document.querySelector("#closeTeamDialogButton");
const cancelTeamDialogButton = document.querySelector("#cancelTeamDialogButton");
const activeUserMetric = document.querySelector("#activeUserMetric");
const teamMetric = document.querySelector("#teamMetric");
const managerMetric = document.querySelector("#managerMetric");
const projectOwnerMetric = document.querySelector("#projectOwnerMetric");
const teamOverviewCount = document.querySelector("#teamOverviewCount");
const teamMemberCount = document.querySelector("#teamMemberCount");
const assetTableBody = document.querySelector("#assetTableBody");
const assetSearch = document.querySelector("#assetSearch");
const assetCategoryFilter = document.querySelector("#assetCategoryFilter");
const assetStatusFilter = document.querySelector("#assetStatusFilter");
const assetResultCount = document.querySelector("#assetResultCount");
const assetEmptyState = document.querySelector("#assetEmptyState");
const clearAssetFiltersButton = document.querySelector("#clearAssetFiltersButton");
const addAssetButton = document.querySelector("#addAssetButton");
const assetDialog = document.querySelector("#assetDialog");
const assetForm = document.querySelector("#assetForm");
const assetFormId = document.querySelector("#assetFormId");
const assetDialogTitle = document.querySelector("#assetDialogTitle");
const assetFormSubmitButton = document.querySelector("#assetFormSubmitButton");
const assetFormDepartment = document.querySelector("#assetFormDepartment");
const assetFormOwner = document.querySelector("#assetFormOwner");
const closeAssetDialogButton = document.querySelector("#closeAssetDialogButton");
const cancelAssetDialogButton = document.querySelector("#cancelAssetDialogButton");
const assetTotalMetric = document.querySelector("#assetTotalMetric");
const assetInUseMetric = document.querySelector("#assetInUseMetric");
const assetRepairMetric = document.querySelector("#assetRepairMetric");
const assetWarrantyMetric = document.querySelector("#assetWarrantyMetric");
const calendarPrevButton = document.querySelector("#calendarPrevButton");
const calendarNextButton = document.querySelector("#calendarNextButton");
const calendarTodayButton = document.querySelector("#calendarTodayButton");
const calendarMonthTitle = document.querySelector("#calendarMonthTitle");
const calendarGrid = document.querySelector("#calendarGrid");
const calendarDayWeekday = document.querySelector("#calendarDayWeekday");
const calendarDayTitle = document.querySelector("#calendarDayTitle");
const calendarDayEvents = document.querySelector("#calendarDayEvents");
const calendarDayEventCount = document.querySelector("#calendarDayEventCount");

let activeFilter = "all";
let searchTerm = "";
let activeProjectId = null;
let editingProjectId = null;
let activeUserId = null;
let editingUserId = null;
let editingAssetId = null;
let activeView = "overview";
let usingBackend = false;
let userSearchTerm = "";
let assetSearchTerm = "";
let calendarCursor = new Date(2026, 8, 1);
let selectedCalendarDate = "2026-09-28";
let lastFocusedElement = null;
let toastTimer = null;

function getStatusClass(status) {
  return `status-${status}`;
}

async function hydrateFromBackend() {
  if (!window.PMApi?.hasSession()) return false;
  try {
    const [projectResult, userResult, teamResult, assetResult, departmentResult] = await Promise.all([
      window.PMApi.listProjects(),
      window.PMApi.listUsers(),
      window.PMApi.listTeams(),
      window.PMApi.listAssets(),
      window.PMApi.listDepartments()
    ]);
    projects.splice(0, projects.length, ...projectResult.projects);
    users.splice(0, users.length, ...userResult.users);
    teams.splice(0, teams.length, ...teamResult.teams);
    assets.splice(0, assets.length, ...assetResult.assets);
    departments.splice(0, departments.length, ...departmentResult.departments);
    usingBackend = true;
    return true;
  } catch (error) {
    if (error.status === 401) {
      window.PMApi.clearSession();
      window.location.replace("./login.html");
      return false;
    }
    console.warn("后端数据加载失败，使用本地演示数据：", error.message);
    return false;
  }
}

function getFilteredProjects() {
  return projects.filter((project) => {
    const matchesSearch =
      !searchTerm ||
      project.name.toLowerCase().includes(searchTerm) ||
      project.owner.toLowerCase().includes(searchTerm) ||
      project.code.toLowerCase().includes(searchTerm);
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "risk" && (project.status === "risk" || project.status === "late")) ||
      (activeFilter === "week" && project.dueIso <= "2026-10-02");

    return matchesSearch && matchesFilter;
  });
}

function renderProjects() {
  const filteredProjects = getFilteredProjects();
  visibleProjectCounts.forEach((count) => {
    count.textContent = String(filteredProjects.length);
  });
  projectTableBody.innerHTML = "";
  allProjectTableBody.innerHTML = "";
  emptyState.hidden = filteredProjects.length > 0;
  allProjectEmptyState.hidden = filteredProjects.length > 0;

  filteredProjects.forEach((project, index) => {
    projectTableBody.append(createProjectRow(project, index));
    allProjectTableBody.append(createProjectRow(project, index));
  });
}

function createProjectRow(project, index) {
  const row = document.createElement("tr");
  const progressClass =
    project.status === "late" ? "is-late" : project.status === "risk" ? "is-risk" : "";
  row.className = "project-row";
  row.tabIndex = 0;
  row.dataset.projectId = String(project.id);
  row.setAttribute("aria-label", `查看 ${project.name} 详情`);
  row.innerHTML = `
    <td>
      <div class="project-name-cell">
        <span class="project-index" style="--project-color: ${project.color}; --project-soft: ${
          project.colorSoft
        }">${String(index + 1).padStart(2, "0")}</span>
        <span class="project-name-copy">
          <strong>${project.name}</strong>
          <span>${project.code} · ${project.stateLabel}</span>
        </span>
      </div>
    </td>
    <td>
      <div class="owner-cell">
        <span class="avatar">${project.ownerInitial}</span>
        <span>${project.owner}</span>
      </div>
    </td>
    <td>
      <div class="progress-cell ${progressClass}">
        <div class="progress-heading">
          <span>已完成</span>
          <strong>${project.progress}%</strong>
        </div>
        <div class="progress-track"><i style="width: ${project.progress}%"></i></div>
      </div>
    </td>
    <td>
      <div class="due-cell ${project.status === "late" ? "is-urgent" : ""}">
        ${project.due}
        <span>${project.status === "late" ? "本周到期" : "计划日期"}</span>
      </div>
    </td>
    <td><span class="status-badge ${getStatusClass(project.status)}">${project.statusLabel}</span></td>
    <td>
      <button class="icon-button row-action" type="button" aria-label="查看 ${project.name}" title="查看详情">
        <svg class="icon"><use href="#icon-more"></use></svg>
      </button>
    </td>
  `;
  row.addEventListener("click", () => openDrawer(project.id, row));
  row.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDrawer(project.id, row);
    }
  });
  return row;
}

function getUserById(userId) {
  return users.find((user) => user.id === Number(userId));
}

function getTeamById(teamId) {
  return teams.find((team) => team.id === Number(teamId));
}

function getProjectById(projectId) {
  return projects.find((project) => project.id === Number(projectId));
}

function getUserStatusMeta(status) {
  if (status === "probation") return { label: "试用期", className: "status-risk" };
  if (status === "disabled") return { label: "已停用", className: "status-late" };
  return { label: "在职", className: "status-normal" };
}

function getUserAvatar(userOrName) {
  const name = typeof userOrName === "string" ? userOrName : userOrName.name;
  return Array.from(name).slice(-2).join("");
}

function getUserTeamName(user) {
  return getTeamById(user.teamId)?.name || "未分配团队";
}

function getUserManagerName(user) {
  if (!user.managerId && user.managerId !== 0) return "未设置";
  return getUserById(user.managerId)?.name || "未设置";
}

function getProjectNames(projectIds) {
  return projectIds.map((projectId) => getProjectById(projectId)?.name).filter(Boolean);
}

function renderUserMetrics() {
  activeUserMetric.textContent = String(users.filter((user) => user.status !== "disabled").length);
  teamMetric.textContent = String(teams.length);
  managerMetric.textContent = String(
    users.filter((user) => users.some((candidate) => candidate.managerId === user.id)).length
  );
  projectOwnerMetric.textContent = String(users.filter((user) => user.projectIds.length > 0).length);
  teamOverviewCount.textContent = String(teams.length);
  teamMemberCount.textContent = String(users.filter((user) => user.teamId).length);
}

function renderTeamSelectors() {
  const currentTeamFilter = userTeamFilter.value || "all";
  userTeamFilter.innerHTML = `
    <option value="all">全部团队</option>
    ${teams.map((team) => `<option value="${team.id}">${team.name}</option>`).join("")}
  `;
  userTeamFilter.value = teams.some((team) => String(team.id) === currentTeamFilter)
    ? currentTeamFilter
    : "all";

  userFormTeam.innerHTML = `
    <option value="">暂不分配</option>
    ${teams.map((team) => `<option value="${team.id}">${team.name}</option>`).join("")}
  `;

  userFormManager.innerHTML = `
    <option value="">暂不设置</option>
    ${users
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name, "zh-CN"))
      .map((user) => `<option value="${user.id}">${user.name} · ${user.role}</option>`)
      .join("")}
  `;
}

function renderUsers() {
  const normalizedSearch = userSearchTerm.trim().toLowerCase();
  const selectedTeam = userTeamFilter.value || "all";
  const filteredUsers = users.filter((user) => {
    const relatedProjects = user.projectIds
      .map(getProjectById)
      .filter(Boolean)
      .map((project) => project.name)
      .join(" ");
    const searchTarget = [
      user.name,
      user.account,
      user.role,
      user.email,
      getUserTeamName(user),
      getUserManagerName(user),
      relatedProjects
    ]
      .join(" ")
      .toLowerCase();
    const matchesSearch = !normalizedSearch || searchTarget.includes(normalizedSearch);
    const matchesTeam = selectedTeam === "all" || String(user.teamId) === selectedTeam;
    return matchesSearch && matchesTeam;
  });

  userResultCount.textContent = `${filteredUsers.length} 位用户`;
  userEmptyState.hidden = filteredUsers.length > 0;
  userTableBody.innerHTML = "";

  filteredUsers.forEach((user) => {
    const statusMeta = getUserStatusMeta(user.status);
    const relatedProjects = user.projectIds.map(getProjectById).filter(Boolean);
    const row = document.createElement("tr");
    row.className = "user-row";
    row.tabIndex = 0;
    row.dataset.userId = String(user.id);
    row.setAttribute("aria-label", `查看 ${user.name} 的用户详情`);
    row.innerHTML = `
      <td>
        <div class="user-cell">
          <span class="avatar avatar-name">${escapeHtml(getUserAvatar(user))}</span>
          <span class="user-cell-copy">
            <strong>${escapeHtml(user.name)}</strong>
            <span>${escapeHtml(user.email)}</span>
          </span>
        </div>
      </td>
      <td>
        <strong class="table-primary">${escapeHtml(user.role)}</strong>
        <span class="table-secondary">${escapeHtml(user.account)}</span>
      </td>
      <td><span class="team-label">${escapeHtml(getUserTeamName(user))}</span></td>
      <td>${escapeHtml(getUserManagerName(user))}</td>
      <td>
        <div class="project-tags">
          ${
            relatedProjects.length
              ? relatedProjects
                  .slice(0, 2)
                  .map(
                    (project) =>
                      `<span style="--project-color: ${project.color}; --project-soft: ${
                        project.colorSoft
                      }">${escapeHtml(project.name)}</span>`
                  )
                  .join("")
              : '<span class="is-muted">暂无项目</span>'
          }
          ${relatedProjects.length > 2 ? `<span>+${relatedProjects.length - 2}</span>` : ""}
        </div>
      </td>
      <td><span class="status-badge ${statusMeta.className}">${statusMeta.label}</span></td>
      <td>
        <button class="icon-button row-action" type="button" aria-label="查看 ${escapeHtml(
          user.name
        )}" title="查看用户">
          <svg class="icon"><use href="#icon-more"></use></svg>
        </button>
      </td>
    `;
    row.addEventListener("click", () => openUserDrawer(user.id, row));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openUserDrawer(user.id, row);
      }
    });
    userTableBody.append(row);
  });
}

function renderTeams() {
  teamList.innerHTML = teams
    .map((team) => {
      const leader = getUserById(team.leaderId);
      const members = users.filter((user) => user.teamId === team.id);
      return `
        <article class="team-simple-row">
          <div class="team-simple-heading">
            <div>
              <h3>${escapeHtml(team.name)}</h3>
              <p>负责人 <strong>${escapeHtml(leader?.name || "未设置")}</strong></p>
            </div>
          </div>
          <div class="team-simple-content">
            <div class="team-member-list" aria-label="${escapeHtml(team.name)}成员">
              ${members
                .map(
                  (member) => `
                    <span class="member-chip ${member.id === team.leaderId ? "is-leader" : ""}">
                      <span>${escapeHtml(member.name)}</span>
                      ${
                        member.id === team.leaderId
                          ? '<small class="leader-label">负责人</small>'
                          : `<button type="button" data-remove-member="${member.id}" data-team-id="${team.id}" aria-label="从${escapeHtml(
                              team.name
                            )}移除${escapeHtml(member.name)}" title="移除成员">×</button>`
                      }
                    </span>
                  `
                )
                .join("")}
            </div>
            <button class="text-link compact add-member-button" type="button" data-edit-team="${team.id}">
              <svg class="icon"><use href="#icon-plus"></use></svg>
              <span>添加成员</span>
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function getAssetStatusClass(status) {
  if (status === "in_use") return "status-normal";
  if (status === "repair") return "status-risk";
  if (status === "retired") return "status-late";
  return "status-done";
}

function renderAssetSelectors() {
  const currentDepartment = assetFormDepartment.value;
  const currentOwner = assetFormOwner.value;
  assetFormDepartment.innerHTML = `
    <option value="">请选择所属部门</option>
    ${departments.map((department) => `<option value="${department.id}">${escapeHtml(department.name)}</option>`).join("")}
  `;
  assetFormOwner.innerHTML = `
    <option value="">暂不分配使用人</option>
    ${users
      .map((user) => `<option value="${user.id}">${escapeHtml(user.name)} · ${escapeHtml(user.role)}</option>`)
      .join("")}
  `;
  if (currentDepartment) assetFormDepartment.value = currentDepartment;
  if (currentOwner) assetFormOwner.value = currentOwner;
}

function renderAssetMetrics() {
  const today = new Date("2026-09-28T00:00:00");
  const warningDate = new Date(today);
  warningDate.setDate(warningDate.getDate() + 90);
  assetTotalMetric.textContent = String(assets.length);
  assetInUseMetric.textContent = String(
    assets.filter((asset) => asset.status === "in_use").length
  );
  assetRepairMetric.textContent = String(
    assets.filter((asset) => asset.status === "repair").length
  );
  assetWarrantyMetric.textContent = String(
    assets.filter((asset) => {
      if (!asset.warrantyEnd || asset.status === "retired") return false;
      const warrantyDate = new Date(`${asset.warrantyEnd}T00:00:00`);
      return warrantyDate >= today && warrantyDate <= warningDate;
    }).length
  );
}

function renderAssets() {
  const keyword = assetSearchTerm.trim().toLowerCase();
  const category = assetCategoryFilter.value || "all";
  const status = assetStatusFilter.value || "all";
  const filteredAssets = assets.filter((asset) => {
    const searchTarget = [
      asset.assetCode,
      asset.name,
      asset.brand,
      asset.model,
      asset.serialNumber,
      asset.ipAddress,
      asset.macAddress,
      asset.owner,
      asset.department,
      asset.location
    ]
      .join(" ")
      .toLowerCase();
    return (
      (!keyword || searchTarget.includes(keyword)) &&
      (category === "all" || asset.category === category) &&
      (status === "all" || asset.status === status)
    );
  });

  assetResultCount.textContent = `${filteredAssets.length} 项资产`;
  assetEmptyState.hidden = filteredAssets.length > 0;
  assetTableBody.innerHTML = "";

  filteredAssets.forEach((asset) => {
    const row = document.createElement("tr");
    row.className = "asset-row";
    row.tabIndex = 0;
    row.dataset.assetId = String(asset.id);
    row.setAttribute("aria-label", `编辑资产 ${asset.name}`);
    row.innerHTML = `
      <td>
        <strong class="table-primary">${escapeHtml(asset.name)}</strong>
        <span class="table-secondary">${escapeHtml(asset.assetCode)}</span>
      </td>
      <td><span class="asset-category">${escapeHtml(asset.categoryLabel)}</span></td>
      <td>
        <strong class="table-primary">${escapeHtml(asset.brand || "—")} ${escapeHtml(
          asset.model || ""
        )}</strong>
        <span class="table-secondary">${escapeHtml(asset.serialNumber || "无序列号")}</span>
      </td>
      <td>
        <strong class="table-primary">${escapeHtml(asset.owner || "未分配")}</strong>
        <span class="table-secondary">${escapeHtml(asset.department || "未分配")}</span>
      </td>
      <td>${escapeHtml(asset.location || "—")}</td>
      <td>
        <strong class="table-primary">${escapeHtml(asset.ipAddress || "—")}</strong>
        <span class="table-secondary">${escapeHtml(asset.macAddress || "—")}</span>
      </td>
      <td><span class="status-badge ${getAssetStatusClass(asset.status)}">${escapeHtml(
        asset.statusLabel
      )}</span></td>
      <td>
        <strong class="table-primary">${escapeHtml(asset.warrantyEnd || "—")}</strong>
        <span class="table-secondary">${
          asset.purchasePrice === null ? "未登记金额" : `¥${Number(asset.purchasePrice).toLocaleString("zh-CN")}`
        }</span>
      </td>
    `;
    row.addEventListener("click", () => openAssetDialog(asset));
    row.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openAssetDialog(asset);
      }
    });
    assetTableBody.append(row);
  });
}

function openAssetDialog(asset = null) {
  renderAssetSelectors();
  assetForm.reset();
  editingAssetId = asset?.id ?? null;
  assetFormId.value = asset ? String(asset.id) : "";
  assetDialogTitle.textContent = asset ? "编辑资产" : "新增资产";
  assetFormSubmitButton.textContent = asset ? "保存修改" : "保存资产";

  if (asset) {
    assetForm.querySelector('[name="assetCode"]').value = asset.assetCode;
    assetForm.querySelector('[name="name"]').value = asset.name;
    assetForm.querySelector('[name="category"]').value = asset.category;
    assetForm.querySelector('[name="status"]').value = asset.status;
    assetForm.querySelector('[name="brand"]').value = asset.brand;
    assetForm.querySelector('[name="model"]').value = asset.model;
    assetForm.querySelector('[name="serialNumber"]').value = asset.serialNumber;
    assetForm.querySelector('[name="department"]').value = asset.departmentId ?? "";
    assetForm.querySelector('[name="ownerId"]').value = asset.ownerId ?? "";
    assetForm.querySelector('[name="location"]').value = asset.location;
    assetForm.querySelector('[name="purchaseDate"]').value = asset.purchaseDate;
    assetForm.querySelector('[name="warrantyEnd"]').value = asset.warrantyEnd;
    assetForm.querySelector('[name="purchasePrice"]').value =
      asset.purchasePrice === null ? "" : asset.purchasePrice;
    assetForm.querySelector('[name="supplier"]').value = asset.supplier;
    assetForm.querySelector('[name="ipAddress"]').value = asset.ipAddress;
    assetForm.querySelector('[name="macAddress"]').value = asset.macAddress;
    assetForm.querySelector('[name="specs"]').value = asset.specs;
    assetForm.querySelector('[name="notes"]').value = asset.notes;
  }

  assetDialog.showModal();
  assetForm.querySelector('[name="assetCode"]').focus();
}

function toDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getTimeLabel(value) {
  return value.slice(11, 16);
}

function getCalendarEventsByDate(dateKey) {
  return projects.flatMap((project) => {
    const startDate = project.schedule.start.slice(0, 10);
    const endDate = project.schedule.end.slice(0, 10);
    const events = [];

    if (startDate === dateKey) {
      events.push({
        projectId: project.id,
        projectName: project.name,
        type: "start",
        label: `${getTimeLabel(project.schedule.start)} 开始`,
        color: project.color,
        colorSoft: project.colorSoft,
        time: getTimeLabel(project.schedule.start)
      });
    }

    if (endDate === dateKey) {
      events.push({
        projectId: project.id,
        projectName: project.name,
        type: "end",
        label: `${getTimeLabel(project.schedule.end)} 结束`,
        color: project.color,
        colorSoft: project.colorSoft,
        time: getTimeLabel(project.schedule.end)
      });
    }

    return events;
  });
}

function renderCalendarDayPanel(dateKey) {
  const date = new Date(`${dateKey}T12:00:00`);
  const events = getCalendarEventsByDate(dateKey);
  const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

  calendarDayWeekday.textContent = weekdays[date.getDay()];
  calendarDayTitle.textContent = `${date.getMonth() + 1} 月 ${date.getDate()} 日`;
  calendarDayEventCount.textContent = `${events.length} 项`;
  calendarDayEvents.innerHTML = events.length
    ? events
        .map(
          (event) => `
            <div class="calendar-day-event" style="--event-color: ${event.color}; --event-soft: ${
              event.colorSoft
            }">
              <span class="event-time">${event.label}</span>
              <strong>${escapeHtml(event.projectName)}</strong>
              <small>${event.type === "start" ? "项目开始" : "项目结束"}</small>
            </div>
          `
        )
        .join("")
    : '<div class="calendar-empty">当天没有项目交付安排。</div>';
}

function renderCalendar() {
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const firstDay = new Date(year, month, 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const calendarStart = new Date(year, month, 1 - mondayOffset);
  const todayKey = "2026-09-28";

  calendarMonthTitle.textContent = `${year} 年 ${month + 1} 月`;
  calendarGrid.innerHTML = "";

  for (let index = 0; index < 42; index += 1) {
    const date = new Date(calendarStart);
    date.setDate(calendarStart.getDate() + index);
    const dateKey = toDateKey(date);
    const events = getCalendarEventsByDate(dateKey);
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "calendar-day";
    cell.dataset.date = dateKey;
    cell.classList.toggle("is-outside", date.getMonth() !== month);
    cell.classList.toggle("is-today", dateKey === todayKey);
    cell.classList.toggle("is-selected", dateKey === selectedCalendarDate);
    cell.setAttribute("aria-label", `${date.getMonth() + 1} 月 ${date.getDate()} 日，${events.length} 项安排`);
    cell.innerHTML = `
      <span class="calendar-day-number">${date.getDate()}</span>
      <span class="calendar-cell-events">
        ${events
          .slice(0, 3)
          .map(
            (event) => `
              <span class="calendar-event-chip" style="--event-color: ${event.color}; --event-soft: ${
                event.colorSoft
              }">
                <i></i>
                <span>${escapeHtml(event.projectName)}</span>
                <small>${event.label}</small>
              </span>
            `
          )
          .join("")}
        ${events.length > 3 ? `<span class="calendar-more">另有 ${events.length - 3} 项</span>` : ""}
      </span>
    `;
    calendarGrid.append(cell);
  }

  renderCalendarDayPanel(selectedCalendarDate);
}

function renderManagementViews() {
  renderUserMetrics();
  renderTeamSelectors();
  renderUsers();
  renderTeams();
  renderAssetMetrics();
  renderAssetSelectors();
  renderAssets();
}

function escapeHtml(value) {
  const element = document.createElement("div");
  element.textContent = String(value);
  return element.innerHTML;
}

function switchView(view) {
  activeView = view;
  appViews.forEach((panel) => {
    panel.hidden = panel.dataset.viewPanel !== view;
  });
  viewNavItems.forEach((item) => {
    const isActive = item.dataset.nav === view;
    item.classList.toggle("is-active", isActive);
    if (isActive) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });

  const viewConfig = {
    overview: {
      title: "企业项目管理",
      subtitle: "2026 年 9 月 28 日，星期一",
      search: "搜索项目或负责人",
      createLabel: "新建项目"
    },
    projects: {
      title: "项目列表",
      subtitle: "全部项目与执行状态",
      search: "搜索项目、负责人或编号",
      createLabel: "新建项目"
    },
    assets: {
      title: "资产台账",
      subtitle: "企业设备与固定资产统计",
      search: "搜索资产编号、名称、型号或 IP",
      createLabel: "新增资产"
    },
    people: {
      title: "人员与团队",
      subtitle: "账号、角色、上级与团队编制",
      search: "搜索用户、角色或上级",
      createLabel: "新建用户"
    },
    calendar: {
      title: "交付日历",
      subtitle: "项目开始与结束时间",
      search: "搜索项目",
      createLabel: "新建项目"
    }
  };

  const config = viewConfig[view] || viewConfig.overview;
  pageTitle.textContent = config.title;
  pageSubtitle.textContent = config.subtitle;
  projectSearch.value = "";
  projectSearch.placeholder = config.search;
  newProjectButton.querySelector("span").textContent = config.createLabel;
  exportButton.hidden = view !== "overview";
  projectSearch.closest(".search-field").hidden = view === "calendar";
  newProjectButton.hidden = view === "calendar";
  accountMenu.hidden = true;

  if (view === "overview") {
    searchTerm = "";
    activeFilter = "all";
    filterButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.filter === "all");
    });
    renderProjects();
  } else if (view === "projects") {
    searchTerm = "";
    projectSearch.value = "";
    activeFilter = "all";
    filterButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.filter === "all");
    });
    renderProjects();
  } else if (view === "assets") {
    assetSearchTerm = "";
    assetSearch.value = "";
    renderAssets();
  } else if (view === "people") {
    userSearchTerm = "";
    userSearch.value = "";
    renderUsers();
    renderTeams();
  } else if (view === "calendar") {
    renderCalendar();
  }
}

function openUserDialog(user = null) {
  renderTeamSelectors();
  userForm.reset();
  editingUserId = user?.id ?? null;
  userFormId.value = user ? String(user.id) : "";
  userDialogTitle.textContent = user ? "编辑用户信息" : "新建用户";
  userDialogDescription.textContent = user
    ? "修改用户的基础信息、组织关系和账号状态。"
    : "创建账号并设置团队、直属上级和岗位角色。";
  userFormSubmitButton.textContent = user ? "保存修改" : "创建用户";
  userFormPassword.required = !user;
  userFormPassword.value = user ? "" : "Aa123456";
  userFormPassword.placeholder = user ? "留空表示不修改密码" : "";

  if (user) {
    userForm.querySelector('[name="name"]').value = user.name;
    userForm.querySelector('[name="account"]').value = user.account;
    userForm.querySelector('[name="role"]').value = user.role;
    userForm.querySelector('[name="teamId"]').value = user.teamId ?? "";
    userForm.querySelector('[name="managerId"]').value = user.managerId ?? "";
    userForm.querySelector('[name="status"]').value = user.status;
    userForm.querySelector('[name="email"]').value = user.email;
  }

  userDialog.showModal();
  userForm.querySelector('[name="name"]').focus();
}

function toMilestoneInputDate(date) {
  if (!date) return "";
  return date.length === 5 ? `2026-${date}` : date.slice(0, 10);
}

function formatMilestoneDate(date) {
  return date.length === 10 ? date.slice(5) : date;
}

function createMilestoneEditorRow(milestone = {}) {
  const row = document.createElement("div");
  row.className = "milestone-editor-row";
  row.innerHTML = `
    <input
      class="milestone-editor-input"
      data-field="label"
      type="text"
      value="${escapeHtml(milestone.label || "")}"
      placeholder="里程碑名称"
      maxlength="30"
      aria-label="里程碑名称"
      required
    />
    <input
      class="milestone-editor-input"
      data-field="date"
      type="date"
      value="${toMilestoneInputDate(milestone.date)}"
      min="2026-09-28"
      aria-label="里程碑日期"
      required
    />
    <select class="milestone-editor-select" data-field="state" aria-label="里程碑状态">
      <option value="todo" ${milestone.state === "todo" || !milestone.state ? "selected" : ""}>未开始</option>
      <option value="current" ${milestone.state === "current" ? "selected" : ""}>进行中</option>
      <option value="done" ${milestone.state === "done" ? "selected" : ""}>已完成</option>
    </select>
    <button class="icon-button milestone-remove-button" type="button" aria-label="删除里程碑" title="删除里程碑">
      <svg class="icon"><use href="#icon-x"></use></svg>
    </button>
  `;
  return row;
}

function renderMilestoneEditor(milestones = []) {
  milestoneEditorList.innerHTML = "";
  if (!milestones.length) {
    milestoneEditorList.innerHTML =
      '<div class="milestone-editor-empty">还没有里程碑，点击“添加里程碑”开始设置。</div>';
    return;
  }
  milestones.forEach((milestone) => {
    milestoneEditorList.append(createMilestoneEditorRow(milestone));
  });
}

function collectMilestoneEditorValues() {
  return [...milestoneEditorList.querySelectorAll(".milestone-editor-row")]
    .map((row) => ({
      label: row.querySelector('[data-field="label"]').value.trim(),
      date: row.querySelector('[data-field="date"]').value,
      state: row.querySelector('[data-field="state"]').value
    }))
    .filter((milestone) => milestone.label && milestone.date);
}

function openProjectDialog(project = null) {
  projectForm.reset();
  editingProjectId = project?.id ?? null;
  projectFormId.value = project ? String(project.id) : "";
  projectDialogTitle.textContent = project ? "编辑项目" : "新建项目";
  projectDialogDescription.textContent = project
    ? "修改项目基础信息，并在下方维护项目里程碑。"
    : "先建立项目，里程碑可在创建后进入编辑页面补充。";
  projectFormSubmitButton.textContent = project ? "保存修改" : "创建项目";
  milestoneEditor.hidden = !project;

  if (project) {
    projectForm.querySelector('[name="name"]').value = project.name;
    projectForm.querySelector('[name="owner"]').value = project.owner;
    projectForm.querySelector('[name="due"]').value = project.dueIso;
    projectForm.querySelector('[name="department"]').value = project.department;
    projectForm.querySelector('[name="type"]').value = project.type;
    projectForm.querySelector('[name="stage"]').value = project.stateLabel;
    projectForm.querySelector('[name="priority"]').value = project.priority;
    projectForm.querySelector('[name="description"]').value = project.description || "";
    renderMilestoneEditor(project.milestones);
  } else {
    renderMilestoneEditor([]);
  }

  projectDialog.showModal();
  projectForm.querySelector('[name="name"]').focus();
}

function openUserDrawer(userId, trigger) {
  const user = getUserById(userId);
  if (!user) return;

  activeUserId = user.id;
  lastFocusedElement = trigger || document.activeElement;
  const team = getTeamById(user.teamId);
  const teamMembers = team ? users.filter((member) => member.teamId === team.id) : [];
  const userProjects = user.projectIds.map(getProjectById).filter(Boolean);
  const statusMeta = getUserStatusMeta(user.status);

  userDrawerStatus.textContent = statusMeta.label;
  userDrawerStatus.className = `status-badge ${statusMeta.className}`;
  userDrawerTitle.textContent = user.name;
  userDrawerRole.textContent = user.role;
  userDrawerAvatar.textContent = getUserAvatar(user);
  userDrawerAccount.textContent = user.account;
  userDrawerEmail.textContent = user.email;
  userDrawerTeam.textContent = getUserTeamName(user);
  userDrawerManager.textContent = getUserManagerName(user);
  userDrawerPosition.textContent = user.role;
  userDrawerAccountStatus.textContent = statusMeta.label;
  userDrawerProjectCount.textContent = `${userProjects.length} 个`;
  userDrawerProjects.innerHTML = userProjects.length
    ? userProjects
        .map(
          (project) =>
            `<div class="relation-item"><strong>${escapeHtml(project.name)}</strong><span>${escapeHtml(
              project.stateLabel
            )}</span></div>`
        )
        .join("")
    : '<div class="relation-empty">暂未关联项目。</div>';
  userDrawerColleagues.innerHTML = teamMembers.length
    ? teamMembers
        .filter((member) => member.id !== user.id)
        .map(
          (member) =>
            `<div class="relation-item"><strong>${escapeHtml(member.name)}</strong><span>${escapeHtml(
              member.role
            )}</span></div>`
        )
        .join("")
    : '<div class="relation-empty">该用户暂未加入团队。</div>';

  userDrawer.classList.add("is-open");
  userDrawer.setAttribute("aria-hidden", "false");
  userDrawerScrim.classList.add("is-open");
  document.body.style.overflow = "hidden";
  closeUserDrawerButton.focus();
}

function closeUserDrawer() {
  userDrawer.classList.remove("is-open");
  userDrawer.setAttribute("aria-hidden", "true");
  userDrawerScrim.classList.remove("is-open");
  document.body.style.overflow = "";
  activeUserId = null;
  if (lastFocusedElement) lastFocusedElement.focus();
}

function openTeamDialog(teamId) {
  const team = getTeamById(teamId);
  if (!team) return;

  teamDialogTitle.textContent = `调整${team.name}`;
  teamFormId.value = String(team.id);
  teamFormLeader.innerHTML = users
    .map(
      (user) =>
        `<option value="${user.id}" ${user.id === team.leaderId ? "selected" : ""}>${escapeHtml(
          user.name
        )} · ${escapeHtml(user.role)}</option>`
    )
    .join("");
  teamMemberPicker.innerHTML = users
    .filter((user) => user.id !== 0)
    .map(
      (user) => `
        <label class="team-member-option">
          <input type="checkbox" name="memberIds" value="${user.id}" ${
            user.teamId === team.id ? "checked" : ""
          } />
          <span>
            <strong>${escapeHtml(user.name)}</strong>
            <small>${escapeHtml(user.role)} · ${escapeHtml(getUserTeamName(user))}</small>
          </span>
        </label>
      `
    )
    .join("");
  teamDialog.showModal();
}
function openDrawer(projectId, trigger) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  activeProjectId = projectId;
  lastFocusedElement = trigger || document.activeElement;
  detailTitle.textContent = project.name;
  detailOwner.textContent = `${project.owner}负责 · ${project.stateLabel}`;
  detailStatus.textContent = project.statusLabel;
  detailStatus.className = `status-badge ${getStatusClass(project.status)}`;
  detailProgress.textContent = `${project.progress}%`;
  detailProgressBar.style.width = `${project.progress}%`;
  detailDue.textContent = project.due;
  detailBudget.textContent = project.budget;
  detailMembers.textContent = `${project.members} 人`;
  detailCode.textContent = project.code;
  detailType.textContent = project.type;
  detailDepartment.textContent = project.department;
  detailPriority.textContent = project.priority;

  const completedMilestones = project.milestones.filter((item) => item.state === "done").length;
  drawerMilestoneCount.textContent = `${completedMilestones}/${project.milestones.length}`;
  detailMilestones.innerHTML = project.milestones.length
    ? project.milestones
        .map(
          (item) => `
            <div class="milestone-item ${item.state === "done" ? "is-done" : ""}">
              <span class="milestone-check" aria-hidden="true"></span>
              <strong>${escapeHtml(item.label)}</strong>
              <time>${escapeHtml(formatMilestoneDate(item.date))}</time>
            </div>
          `
        )
        .join("")
    : '<div class="milestone-empty-state">暂无里程碑，可通过“编辑项目”进行添加。</div>';

  drawerIssue.classList.toggle("is-clear", !project.issue);
  drawerIssue.querySelector("p").textContent = project.issue || "暂无需要升级的问题。";
  drawerActivity.innerHTML = project.activity
    .map(
      (item, index) => `
        <div class="activity-item">
          <i ${index > 0 ? 'style="background: var(--ink-muted)"' : ""}></i>
          <div>
            <p>${item}</p>
            <time>${index === 0 ? "今天 10:24" : `${index + 1} 天前`}</time>
          </div>
        </div>
      `
    )
    .join("");

  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  drawerScrim.classList.add("is-open");
  document.body.style.overflow = "hidden";
  document.querySelector("#closeDrawerButton").focus();
}

function closeDrawer() {
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  drawerScrim.classList.remove("is-open");
  document.body.style.overflow = "";
  activeProjectId = null;
  if (lastFocusedElement) lastFocusedElement.focus();
}

function openSidebar() {
  sidebar.classList.add("is-open");
  scrim.classList.add("is-open");
}

function closeSidebar() {
  sidebar.classList.remove("is-open");
  scrim.classList.remove("is-open");
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function resetFilters() {
  activeFilter = "all";
  searchTerm = "";
  projectSearch.value = "";
  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === "all");
  });
  renderProjects();
}

projectSearch.addEventListener("input", (event) => {
  const value = event.target.value.trim().toLowerCase();
  if (activeView === "overview" || activeView === "projects") {
    searchTerm = value;
    renderProjects();
  } else if (activeView === "assets") {
    assetSearchTerm = value;
    assetSearch.value = event.target.value;
    renderAssets();
  } else if (activeView === "people") {
    userSearchTerm = value;
    userSearch.value = event.target.value;
    renderUsers();
  }
});

userSearch.addEventListener("input", (event) => {
  userSearchTerm = event.target.value.trim().toLowerCase();
  projectSearch.value = event.target.value;
  renderUsers();
});

assetSearch.addEventListener("input", (event) => {
  assetSearchTerm = event.target.value.trim().toLowerCase();
  projectSearch.value = event.target.value;
  renderAssets();
});

assetCategoryFilter.addEventListener("change", renderAssets);
assetStatusFilter.addEventListener("change", renderAssets);
userTeamFilter.addEventListener("change", renderUsers);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderProjects();
  });
});

document.querySelector("#clearFiltersButton").addEventListener("click", resetFilters);
clearProjectListFiltersButton.addEventListener("click", resetFilters);
clearAssetFiltersButton.addEventListener("click", () => {
  assetSearchTerm = "";
  assetSearch.value = "";
  projectSearch.value = "";
  assetCategoryFilter.value = "all";
  assetStatusFilter.value = "all";
  renderAssets();
});
document.querySelector("#closeDrawerButton").addEventListener("click", closeDrawer);
drawerScrim.addEventListener("click", closeDrawer);
closeUserDrawerButton.addEventListener("click", closeUserDrawer);
userDrawerScrim.addEventListener("click", closeUserDrawer);
menuButton.addEventListener("click", openSidebar);
scrim.addEventListener("click", closeSidebar);
exportButton.addEventListener("click", () => showToast("项目周报已生成，正在准备下载"));
notificationButton.addEventListener("click", () => showToast("当前有 3 条项目提醒"));
accountMenuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  accountMenu.hidden = !accountMenu.hidden;
});
accountMenu.addEventListener("click", (event) => event.stopPropagation());
accountProfileButton.addEventListener("click", () => {
  accountMenu.hidden = true;
  showToast("当前账号：admin · 超级管理员");
});
logoutButton.addEventListener("click", async () => {
  await window.PMApi?.logout();
  window.PMApi?.clearSession();
  sessionStorage.removeItem("pm_auth");
  localStorage.removeItem("pm_auth");
  window.location.replace("./login.html");
});
addUserButton.addEventListener("click", () => openUserDialog());
addAssetButton.addEventListener("click", () => openAssetDialog());
userEditButton.addEventListener("click", () => {
  const user = getUserById(activeUserId);
  if (user) openUserDialog(user);
});
userTeamButton.addEventListener("click", () => {
  const user = getUserById(activeUserId);
  if (user?.teamId) openTeamDialog(user.teamId);
  else showToast("该用户暂未加入团队");
});
teamList.addEventListener("click", async (event) => {
  const editButton = event.target.closest("[data-edit-team]");
  if (editButton) {
    openTeamDialog(Number(editButton.dataset.editTeam));
    return;
  }

  const removeButton = event.target.closest("[data-remove-member]");
  if (!removeButton) return;
  const member = getUserById(Number(removeButton.dataset.removeMember));
  const team = getTeamById(Number(removeButton.dataset.teamId));
  if (!member || !team) return;
  if (usingBackend) {
    const remainingMemberIds = users
      .filter((user) => user.teamId === team.id && user.id !== member.id)
      .map((user) => user.id);
    try {
      await window.PMApi.updateTeam(team.id, {
        name: team.name,
        leaderId: team.leaderId,
        memberIds: remainingMemberIds
      });
    } catch (error) {
      showToast(error.message || "移除成员失败");
      return;
    }
  }
  member.teamId = null;
  renderManagementViews();
  showToast(`${member.name} 已从${team.name}移除`);
});
calendarGrid.addEventListener("click", (event) => {
  const day = event.target.closest("[data-date]");
  if (!day) return;
  selectedCalendarDate = day.dataset.date;
  renderCalendar();
});
calendarPrevButton.addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() - 1, 1);
  selectedCalendarDate = toDateKey(calendarCursor);
  renderCalendar();
});
calendarNextButton.addEventListener("click", () => {
  calendarCursor = new Date(calendarCursor.getFullYear(), calendarCursor.getMonth() + 1, 1);
  selectedCalendarDate = toDateKey(calendarCursor);
  renderCalendar();
});
calendarTodayButton.addEventListener("click", () => {
  calendarCursor = new Date(2026, 8, 1);
  selectedCalendarDate = "2026-09-28";
  renderCalendar();
});
viewAllProjectsButton.addEventListener("click", () => {
  resetFilters();
  switchView("projects");
  showToast("已进入项目列表");
});

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (item.dataset.view) {
      event.preventDefault();
      switchView(item.dataset.view);
      if (item.dataset.scroll) {
        window.setTimeout(() => {
          document.querySelector(`#${item.dataset.scroll}`)?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ? "auto"
              : "smooth",
            block: "start"
          });
        }, 0);
      }
    } else {
      event.preventDefault();
      showToast("该模块将在后续版本开放");
    }
    closeSidebar();
  });
});

document.querySelectorAll(".agenda-item").forEach((item) => {
  item.addEventListener("click", () => openDrawer(Number(item.dataset.projectId), item));
});

document.querySelector("#drawerMessageButton").addEventListener("click", () => {
  const project = projects.find((item) => item.id === activeProjectId);
  if (project) showToast(`已打开与 ${project.owner} 的会话`);
});

editProjectButton.addEventListener("click", () => {
  const project = projects.find((item) => item.id === activeProjectId);
  if (project) openProjectDialog(project);
});
addMilestoneRowButton.addEventListener("click", () => {
  milestoneEditorList.querySelector(".milestone-editor-empty")?.remove();
  milestoneEditorList.append(createMilestoneEditorRow());
});
milestoneEditorList.addEventListener("click", (event) => {
  const removeButton = event.target.closest(".milestone-remove-button");
  if (!removeButton) return;
  removeButton.closest(".milestone-editor-row")?.remove();
  if (!milestoneEditorList.querySelector(".milestone-editor-row")) {
    milestoneEditorList.innerHTML =
      '<div class="milestone-editor-empty">还没有里程碑，点击“添加里程碑”开始设置。</div>';
  }
});

document.querySelector("#newProjectButton").addEventListener("click", () => {
  if (activeView === "people") {
    openUserDialog();
    return;
  }
  if (activeView === "assets") {
    openAssetDialog();
    return;
  }
  openProjectDialog();
});
newProjectListButton.addEventListener("click", openProjectDialog);

document.querySelector("#closeDialogButton").addEventListener("click", () => projectDialog.close());
document.querySelector("#cancelDialogButton").addEventListener("click", () => projectDialog.close());
closeUserDialogButton.addEventListener("click", () => userDialog.close());
cancelUserDialogButton.addEventListener("click", () => userDialog.close());
closeTeamDialogButton.addEventListener("click", () => teamDialog.close());
cancelTeamDialogButton.addEventListener("click", () => teamDialog.close());
closeAssetDialogButton.addEventListener("click", () => assetDialog.close());
cancelAssetDialogButton.addEventListener("click", () => assetDialog.close());

projectForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(projectForm);
  const projectIdValue = String(formData.get("projectId"));
  const projectName = String(formData.get("name")).trim();
  const owner = String(formData.get("owner")).trim();
  const dueIso = String(formData.get("due"));
  const stage = String(formData.get("stage"));
  const department = String(formData.get("department")).trim();
  const type = String(formData.get("type"));
  const priority = String(formData.get("priority"));
  const description = String(formData.get("description")).trim();
  const dueDate = new Date(`${dueIso}T00:00:00`);
  const due = `${String(dueDate.getMonth() + 1).padStart(2, "0")} 月 ${String(
    dueDate.getDate()
  ).padStart(2, "0")} 日`;
  const milestones = editingProjectId === null ? [] : collectMilestoneEditorValues();

  if (editingProjectId !== null) {
    const project = getProjectById(editingProjectId);
    if (project) {
      if (usingBackend) {
        try {
          const result = await window.PMApi.updateProject(project.id, {
            name: projectName,
            owner,
            department,
            type,
            stage,
            priority,
            description,
            endDate: dueIso,
            status: project.status,
            statusLabel: project.statusLabel,
            progress: project.progress,
            budget: project.budget,
            startDate: project.schedule.start.slice(0, 10),
            color: project.color,
            colorSoft: project.colorSoft,
            milestones
          });
          const index = projects.findIndex((item) => item.id === project.id);
          if (index >= 0) projects[index] = result.project;
          projectDialog.close();
          editingProjectId = null;
          renderProjects();
          openDrawer(result.project.id);
          showToast(`${result.project.name} 已更新`);
          return;
        } catch (error) {
          showToast(error.message || "项目更新失败");
          return;
        }
      }

      Object.assign(project, {
        name: projectName,
        owner,
        ownerInitial: owner.slice(0, 1),
        due,
        dueIso,
        stateLabel: stage,
        department,
        type,
        priority,
        description,
        schedule: { ...project.schedule, end: `${dueIso}T18:00:00` },
        milestones
      });
      projectDialog.close();
      editingProjectId = null;
      renderProjects();
      openDrawer(project.id);
      showToast(`${project.name} 已更新`);
    }
    return;
  }

  const localProject = {
    id: projectIdValue ? Number(projectIdValue) : Date.now(),
    name: projectName,
    code: `NEW-${String(projects.length + 1).padStart(2, "0")}`,
    owner,
    ownerInitial: owner.slice(0, 1),
    progress: 8,
    due,
    dueIso,
    status: "normal",
    statusLabel: "刚创建",
    stateLabel: stage,
    department,
    type,
    priority,
    description,
    color: "#287FD5",
    colorSoft: "#E8F2FD",
    schedule: { start: "2026-09-28T09:00:00", end: `${dueIso}T18:00:00` },
    budget: "0%",
    members: 1,
    issue: "",
    milestones: [],
    activity: [
      description ? `项目说明：${description}` : "项目已创建，等待补充成员与任务"
    ]
  };

  if (usingBackend) {
    try {
      const result = await window.PMApi.createProject({
        name: projectName,
        owner,
        department,
        type,
        stage,
        priority,
        description,
        endDate: dueIso,
        startDate: "2026-09-28",
        status: "normal",
        statusLabel: "刚创建",
        progress: 8,
        budget: "0%",
        color: "#287FD5",
        colorSoft: "#E8F2FD",
        milestones: []
      });
      projects.unshift(result.project);
    } catch (error) {
      showToast(error.message || "项目创建失败");
      return;
    }
  } else {
    projects.unshift(localProject);
  }

  projectForm.reset();
  projectDialog.close();
  resetFilters();
  totalProjectMetric.textContent = String(Number(totalProjectMetric.textContent) + 1);
  showToast(`${projectName} 已创建`);
});

assetForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(assetForm);
  const departmentIdValue = String(formData.get("department"));
  const ownerIdValue = String(formData.get("ownerId"));
  const department = departments.find(
    (item) => String(item.id) === departmentIdValue
  );
  const owner = users.find((item) => String(item.id) === ownerIdValue);
  const category = String(formData.get("category"));
  const status = String(formData.get("status"));
  const categoryLabels = {
    pc: "台式电脑",
    laptop: "笔记本",
    server: "服务器",
    switch: "交换机",
    router: "路由器",
    firewall: "防火墙",
    printer: "打印机",
    monitor: "显示器",
    other: "其他设备"
  };
  const statusLabels = {
    in_use: "使用中",
    idle: "闲置",
    repair: "维修中",
    retired: "已报废"
  };
  const assetValues = {
    assetCode: String(formData.get("assetCode")).trim(),
    name: String(formData.get("name")).trim(),
    category,
    categoryLabel: categoryLabels[category] || categoryLabels.other,
    brand: String(formData.get("brand")).trim(),
    model: String(formData.get("model")).trim(),
    serialNumber: String(formData.get("serialNumber")).trim(),
    departmentId: departmentIdValue ? Number(departmentIdValue) : null,
    department: department?.name || "未分配",
    ownerId: ownerIdValue ? Number(ownerIdValue) : null,
    owner: owner?.name || "未分配",
    location: String(formData.get("location")).trim(),
    status,
    statusLabel: statusLabels[status] || statusLabels.idle,
    purchaseDate: String(formData.get("purchaseDate")),
    warrantyEnd: String(formData.get("warrantyEnd")),
    purchasePrice: formData.get("purchasePrice")
      ? Number(formData.get("purchasePrice"))
      : null,
    supplier: String(formData.get("supplier")).trim(),
    ipAddress: String(formData.get("ipAddress")).trim(),
    macAddress: String(formData.get("macAddress")).trim(),
    specs: String(formData.get("specs")).trim(),
    notes: String(formData.get("notes")).trim()
  };

  let savedAsset;
  if (usingBackend) {
    try {
      const result = editingAssetId
        ? await window.PMApi.updateAsset(editingAssetId, assetValues)
        : await window.PMApi.createAsset(assetValues);
      savedAsset = result.asset;
    } catch (error) {
      showToast(error.message || "资产保存失败");
      return;
    }
  } else {
    savedAsset = {
      id: editingAssetId || Math.max(0, ...assets.map((asset) => asset.id)) + 1,
      ...assetValues
    };
  }

  const existingIndex = assets.findIndex((asset) => asset.id === savedAsset.id);
  if (existingIndex >= 0) assets[existingIndex] = savedAsset;
  else assets.unshift(savedAsset);

  assetDialog.close();
  editingAssetId = null;
  renderAssetMetrics();
  renderAssets();
  showToast(`${savedAsset.name} 已保存`);
});

userForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(userForm);
  const account = String(formData.get("account")).trim();
  const name = String(formData.get("name")).trim();

  if (
    users.some(
      (user) =>
        user.account.toLowerCase() === account.toLowerCase() && user.id !== editingUserId
    )
  ) {
    showToast("该登录账号已存在");
    userForm.querySelector('[name="account"]').focus();
    return;
  }

  const teamValue = String(formData.get("teamId"));
  const managerValue = String(formData.get("managerId"));
  const userValues = {
    name,
    account,
    role: String(formData.get("role")),
    teamId: teamValue ? Number(teamValue) : null,
    managerId: managerValue ? Number(managerValue) : null,
    status: String(formData.get("status")),
    email: String(formData.get("email")).trim()
  };

  if (editingUserId !== null) {
    const user = getUserById(editingUserId);
    if (user && usingBackend) {
      try {
        await window.PMApi.updateUser(user.id, userValues);
      } catch (error) {
        showToast(error.message || "用户信息更新失败");
        return;
      }
    }
    if (user) Object.assign(user, userValues);
    userDialog.close();
    editingUserId = null;
    renderManagementViews();
    if (user) {
      openUserDrawer(user.id);
      showToast(`${user.name} 的信息已更新`);
    }
    return;
  }

  let newUserId = Math.max(...users.map((user) => user.id)) + 1;
  if (usingBackend) {
    try {
      const result = await window.PMApi.createUser({
        ...userValues,
        password: String(formData.get("password"))
      });
      newUserId = Number(result.id);
    } catch (error) {
      showToast(error.message || "用户创建失败");
      return;
    }
  }

  const newUser = {
    id: newUserId,
    ...userValues,
    projectIds: []
  };

  users.push(newUser);
  userDialog.close();
  renderManagementViews();
  showToast(`${newUser.name} 已创建并加入组织关系`);
});

teamForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(teamForm);
  const team = getTeamById(formData.get("teamId"));
  if (!team) return;

  const leaderId = Number(formData.get("leaderId"));
  const memberIds = new Set(formData.getAll("memberIds").map(Number));
  memberIds.add(leaderId);

  if (usingBackend) {
    try {
      const result = await window.PMApi.updateTeam(team.id, {
        name: team.name,
        leaderId,
        memberIds: [...memberIds]
      });
      team.leaderId = result.team.leaderId;
      users.forEach((user) => {
        if (user.id === 0) return;
        if (result.team.memberIds.includes(user.id)) {
          user.teamId = team.id;
        } else if (user.teamId === team.id) {
          user.teamId = null;
        }
      });
    } catch (error) {
      showToast(error.message || "团队编制保存失败");
      return;
    }
  } else {
    team.leaderId = leaderId;
    users.forEach((user) => {
      if (user.id === 0) return;
      if (memberIds.has(user.id)) {
        user.teamId = team.id;
      } else if (user.teamId === team.id) {
        user.teamId = null;
      }
    });
  }

  teamDialog.close();
  renderManagementViews();
  if (activeUserId) openUserDrawer(activeUserId);
  showToast(`${team.name}的团队编制已更新`);
});

document.addEventListener("click", () => {
  accountMenu.hidden = true;
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    projectSearch.focus();
  }

  if (event.key === "Escape") {
    if (drawer.classList.contains("is-open")) closeDrawer();
    if (userDrawer.classList.contains("is-open")) closeUserDrawer();
    if (sidebar.classList.contains("is-open")) closeSidebar();
  }
});

async function bootstrapApplication() {
  await hydrateFromBackend();
  renderManagementViews();
  switchView("overview");
}

bootstrapApplication();
