import { Router } from "express";
import { pool } from "../db.js";
import { asyncHandler, httpError } from "../middleware/error.js";

export const assetsRouter = Router();

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

function mapAsset(row) {
  return {
    id: Number(row.id),
    assetCode: row.asset_code,
    name: row.name,
    category: row.category,
    categoryLabel: categoryLabels[row.category] || categoryLabels.other,
    brand: row.brand || "",
    model: row.model || "",
    serialNumber: row.serial_number || "",
    departmentId: row.department_id === null ? null : Number(row.department_id),
    department: row.department_name || "未分配",
    ownerId: row.owner_id === null ? null : Number(row.owner_id),
    owner: row.owner_name || "未分配",
    location: row.location || "",
    status: row.status,
    statusLabel: statusLabels[row.status] || statusLabels.idle,
    purchaseDate: row.purchase_date || "",
    warrantyEnd: row.warranty_end || "",
    purchasePrice: row.purchase_price === null ? null : Number(row.purchase_price),
    supplier: row.supplier || "",
    ipAddress: row.ip_address || "",
    macAddress: row.mac_address || "",
    specs: row.specs || "",
    notes: row.notes || ""
  };
}

const assetSelect = `
  SELECT a.*, d.name AS department_name, u.display_name AS owner_name
  FROM assets a
  LEFT JOIN departments d ON d.id = a.department_id
  LEFT JOIN users u ON u.id = a.owner_id
`;

async function getAssetById(assetId) {
  const [rows] = await pool.query(`${assetSelect} WHERE a.id = ? LIMIT 1`, [assetId]);
  return rows[0] ? mapAsset(rows[0]) : null;
}

assetsRouter.get(
  "/",
  asyncHandler(async (request, response) => {
    const keyword = String(request.query.keyword || "").trim();
    const category = String(request.query.category || "").trim();
    const status = String(request.query.status || "").trim();
    const departmentId = String(request.query.departmentId || "").trim();
    const conditions = [];
    const params = [];

    if (keyword) {
      conditions.push(
        "(a.asset_code LIKE ? OR a.name LIKE ? OR a.brand LIKE ? OR a.model LIKE ? OR a.serial_number LIKE ? OR a.ip_address LIKE ?)"
      );
      const value = `%${keyword}%`;
      params.push(value, value, value, value, value, value);
    }
    if (category && category !== "all") {
      conditions.push("a.category = ?");
      params.push(category);
    }
    if (status && status !== "all") {
      conditions.push("a.status = ?");
      params.push(status);
    }
    if (departmentId && departmentId !== "all") {
      conditions.push("a.department_id = ?");
      params.push(departmentId);
    }

    const [rows] = await pool.query(
      `${assetSelect}
       ${conditions.length ? `WHERE ${conditions.join(" AND ")}` : ""}
       ORDER BY a.asset_code`,
      params
    );
    response.json({ assets: rows.map(mapAsset) });
  })
);

assetsRouter.get(
  "/:id",
  asyncHandler(async (request, response) => {
    const asset = await getAssetById(request.params.id);
    if (!asset) throw httpError(404, "资产不存在");
    response.json({ asset });
  })
);

assetsRouter.post(
  "/",
  asyncHandler(async (request, response) => {
    const body = request.body;
    if (!body.assetCode || !body.name) throw httpError(400, "资产编号和资产名称不能为空");
    try {
      const [result] = await pool.query(
        `INSERT INTO assets
          (asset_code, name, category, brand, model, serial_number, department_id, owner_id,
           location, status, purchase_date, warranty_end, purchase_price, supplier,
           ip_address, mac_address, specs, notes)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          body.assetCode,
          body.name,
          body.category || "other",
          body.brand || null,
          body.model || null,
          body.serialNumber || null,
          body.departmentId || null,
          body.ownerId ?? null,
          body.location || null,
          body.status || "in_use",
          body.purchaseDate || null,
          body.warrantyEnd || null,
          body.purchasePrice === "" || body.purchasePrice === undefined
            ? null
            : Number(body.purchasePrice),
          body.supplier || null,
          body.ipAddress || null,
          body.macAddress || null,
          body.specs || null,
          body.notes || null
        ]
      );
      response.status(201).json({ asset: await getAssetById(result.insertId) });
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") throw httpError(409, "资产编号或序列号已存在");
      throw error;
    }
  })
);

assetsRouter.put(
  "/:id",
  asyncHandler(async (request, response) => {
    const assetId = Number(request.params.id);
    const [rows] = await pool.query("SELECT * FROM assets WHERE id = ? LIMIT 1", [assetId]);
    const existing = rows[0];
    if (!existing) throw httpError(404, "资产不存在");
    const body = request.body;

    try {
      await pool.query(
        `UPDATE assets SET
          asset_code = ?, name = ?, category = ?, brand = ?, model = ?, serial_number = ?,
          department_id = ?, owner_id = ?, location = ?, status = ?, purchase_date = ?,
          warranty_end = ?, purchase_price = ?, supplier = ?, ip_address = ?, mac_address = ?,
          specs = ?, notes = ?
         WHERE id = ?`,
        [
          body.assetCode ?? existing.asset_code,
          body.name ?? existing.name,
          body.category ?? existing.category,
          body.brand ?? existing.brand,
          body.model ?? existing.model,
          body.serialNumber ?? existing.serial_number,
          body.departmentId === null ? null : body.departmentId ?? existing.department_id,
          body.ownerId === null ? null : body.ownerId ?? existing.owner_id,
          body.location ?? existing.location,
          body.status ?? existing.status,
          body.purchaseDate === "" ? null : body.purchaseDate ?? existing.purchase_date,
          body.warrantyEnd === "" ? null : body.warrantyEnd ?? existing.warranty_end,
          body.purchasePrice === "" || body.purchasePrice === undefined
            ? existing.purchase_price
            : Number(body.purchasePrice),
          body.supplier ?? existing.supplier,
          body.ipAddress ?? existing.ip_address,
          body.macAddress ?? existing.mac_address,
          body.specs ?? existing.specs,
          body.notes ?? existing.notes,
          assetId
        ]
      );
      response.json({ asset: await getAssetById(assetId) });
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") throw httpError(409, "资产编号或序列号已存在");
      throw error;
    }
  })
);

assetsRouter.delete(
  "/:id",
  asyncHandler(async (request, response) => {
    const [result] = await pool.query("DELETE FROM assets WHERE id = ?", [request.params.id]);
    if (!result.affectedRows) throw httpError(404, "资产不存在");
    response.status(204).end();
  })
);
