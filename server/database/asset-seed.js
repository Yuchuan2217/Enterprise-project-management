const assets = [
  [1, "PC-DT-0001", "研发办公电脑", "pc", "Dell", "OptiPlex 7010", "DL-7010-0001", 1, 2, "上海总部 3F-研发区", "in_use", "2024-03-12", "2027-03-11", 6299, "戴尔企业采购", null, null, "i7-13700 / 32GB / 1TB SSD / Win11 Pro", "研发主力工作站"],
  [2, "PC-NB-0002", "项目经理笔记本", "laptop", "Lenovo", "ThinkPad T14 Gen 4", "LN-T14-0002", 1, 1, "上海总部 3F-PMO", "in_use", "2024-06-18", "2027-06-17", 8999, "联想企业采购", null, null, "i7-1365U / 32GB / 1TB SSD", "移动办公"],
  [3, "PC-DT-0003", "财务办公电脑", "pc", "HP", "ProDesk 600 G9", "HP-600-0003", 7, 0, "上海总部 2F-财务部", "in_use", "2023-11-06", "2026-11-05", 5499, "惠普企业采购", null, null, "i5-13500 / 16GB / 512GB SSD", "财务系统专用"],
  [4, "PC-NB-0004", "产品设计笔记本", "laptop", "Apple", "MacBook Pro 14 M3", "AP-MBP-0004", 3, 6, "上海总部 3F-产品区", "in_use", "2024-09-20", "2027-09-19", 16999, "苹果企业采购", null, null, "M3 Pro / 18GB / 512GB SSD", "设计及原型制作"],
  [5, "SRV-RK-0001", "数据中台测试服务器", "server", "Dell", "PowerEdge R750", "DL-R750-0001", 1, 7, "上海机房 A02 机柜", "in_use", "2023-05-16", "2028-05-15", 128000, "戴尔企业采购", "10.20.1.11", "00:1B:44:11:3A:B7", "2×Xeon Gold / 256GB / 8×1.92TB SSD", "数据中台测试环境"],
  [6, "SRV-RK-0002", "应用服务器", "server", "HPE", "ProLiant DL380 Gen11", "HP-DL380-0002", 1, 8, "上海机房 A03 机柜", "in_use", "2024-01-08", "2029-01-07", 146000, "新华三集成", "10.20.1.12", "00:1B:44:11:3A:C8", "2×Xeon Gold / 512GB / RAID10", "核心应用"],
  [7, "NET-SW-0001", "核心交换机", "switch", "Cisco", "Catalyst 9200L-48P", "CS-9200-0001", 1, 8, "上海机房 A01 机柜", "in_use", "2023-07-21", "2028-07-20", 36800, "思科授权代理", "10.10.1.2", "00:5F:86:41:22:01", "48×1G PoE+ / 4×10G SFP+", "总部核心交换"],
  [8, "NET-SW-0002", "办公区接入交换机", "switch", "H3C", "S5130S-28P-EI", "H3C-5130-0002", 1, 8, "上海总部 3F 弱电间", "in_use", "2024-04-02", "2029-04-01", 7800, "新华三集成", "10.10.20.2", "00:23:89:55:77:02", "24×1G / 4×10G SFP+", "3F 办公网络"],
  [9, "NET-RT-0001", "出口路由器", "router", "Huawei", "AR6300-S", "HW-AR6300-0001", 1, 8, "上海机房 A01 机柜", "in_use", "2023-07-21", "2028-07-20", 42500, "华为企业业务", "10.10.0.1", "AC:4E:91:23:45:67", "双电源 / 双 WAN / 1Gbps 出口", "总部互联网出口"],
  [10, "NET-FW-0001", "下一代防火墙", "firewall", "Fortinet", "FortiGate 100F", "FG-100F-0001", 1, 8, "上海机房 A01 机柜", "in_use", "2023-07-21", "2027-07-20", 56800, "网安科技", "10.10.0.254", "70:4C:A5:12:34:56", "10G 接口 / 双电源 / IPS+AV", "网络边界防护"],
  [11, "PRT-LJ-0001", "财务高速打印机", "printer", "HP", "LaserJet Enterprise M611dn", "HP-M611-0001", 7, 0, "上海总部 2F-财务部", "repair", "2022-10-11", "2025-10-10", 12800, "惠普企业采购", "10.10.30.21", "3C:52:82:AA:BB:CC", "黑白激光 / 自动双面 / 网络打印", "进纸组件待维修"],
  [12, "MON-4K-0001", "设计显示器", "monitor", "Dell", "UltraSharp U2723QE", "DL-U2723-0001", 3, 6, "上海总部 3F-产品区", "idle", "2024-09-20", "2027-09-19", 4299, "戴尔企业采购", null, null, "27 英寸 4K / USB-C 90W", "备用显示器"]
];

export async function seedAssets(connection) {
  for (const asset of assets) {
    await connection.query(
      `INSERT INTO assets
        (id, asset_code, name, category, brand, model, serial_number, department_id, owner_id,
         location, status, purchase_date, warranty_end, purchase_price, supplier,
         ip_address, mac_address, specs, notes)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE
        asset_code = VALUES(asset_code),
        name = VALUES(name),
        category = VALUES(category),
        brand = VALUES(brand),
        model = VALUES(model),
        serial_number = VALUES(serial_number),
        department_id = VALUES(department_id),
        owner_id = VALUES(owner_id),
        location = VALUES(location),
        status = VALUES(status),
        purchase_date = VALUES(purchase_date),
        warranty_end = VALUES(warranty_end),
        purchase_price = VALUES(purchase_price),
        supplier = VALUES(supplier),
        ip_address = VALUES(ip_address),
        mac_address = VALUES(mac_address),
        specs = VALUES(specs),
        notes = VALUES(notes)`,
      asset
    );
  }
}
