USE __DB_NAME__;

CREATE TABLE IF NOT EXISTS assets (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  asset_code VARCHAR(32) NOT NULL UNIQUE,
  name VARCHAR(80) NOT NULL,
  category ENUM('pc', 'laptop', 'server', 'switch', 'router', 'firewall', 'printer', 'monitor', 'other')
    NOT NULL DEFAULT 'other',
  brand VARCHAR(40) NULL,
  model VARCHAR(80) NULL,
  serial_number VARCHAR(80) NULL UNIQUE,
  department_id INT NULL,
  owner_id BIGINT NULL,
  location VARCHAR(100) NULL,
  status ENUM('in_use', 'idle', 'repair', 'retired') NOT NULL DEFAULT 'in_use',
  purchase_date DATE NULL,
  warranty_end DATE NULL,
  purchase_price DECIMAL(12, 2) NULL,
  supplier VARCHAR(80) NULL,
  ip_address VARCHAR(45) NULL,
  mac_address VARCHAR(32) NULL,
  specs VARCHAR(200) NULL,
  notes VARCHAR(200) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_assets_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL,
  CONSTRAINT fk_assets_owner FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_assets_category (category),
  INDEX idx_assets_status (status),
  INDEX idx_assets_department (department_id),
  INDEX idx_assets_warranty (warranty_end)
) ENGINE=InnoDB;
