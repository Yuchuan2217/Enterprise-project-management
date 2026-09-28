CREATE DATABASE IF NOT EXISTS __DB_NAME__
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_0900_ai_ci;

USE __DB_NAME__;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS project_members;
DROP TABLE IF EXISTS milestones;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS assets;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS departments;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE departments (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(40) NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE teams (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(60) NOT NULL UNIQUE,
  leader_id BIGINT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(32) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  display_name VARCHAR(40) NOT NULL,
  role VARCHAR(40) NOT NULL,
  role_label VARCHAR(40) NOT NULL,
  email VARCHAR(80) NOT NULL UNIQUE,
  status ENUM('active', 'probation', 'disabled') NOT NULL DEFAULT 'active',
  team_id INT NULL,
  manager_id BIGINT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_users_team FOREIGN KEY (team_id) REFERENCES teams(id) ON DELETE SET NULL,
  CONSTRAINT fk_users_manager FOREIGN KEY (manager_id) REFERENCES users(id) ON DELETE SET NULL,
  INDEX idx_users_team (team_id),
  INDEX idx_users_manager (manager_id)
) ENGINE=InnoDB;

ALTER TABLE teams
  ADD CONSTRAINT fk_teams_leader
  FOREIGN KEY (leader_id) REFERENCES users(id) ON DELETE SET NULL;

CREATE TABLE projects (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  code VARCHAR(24) NOT NULL UNIQUE,
  name VARCHAR(80) NOT NULL,
  owner_id BIGINT NOT NULL,
  department_id INT NULL,
  type VARCHAR(40) NOT NULL,
  stage VARCHAR(40) NOT NULL,
  status ENUM('normal', 'risk', 'late', 'done') NOT NULL DEFAULT 'normal',
  status_label VARCHAR(20) NOT NULL DEFAULT '正常',
  priority ENUM('high', 'medium', 'low') NOT NULL DEFAULT 'medium',
  progress TINYINT UNSIGNED NOT NULL DEFAULT 0,
  budget_percent DECIMAL(5, 2) NOT NULL DEFAULT 0,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  description VARCHAR(200) NULL,
  color CHAR(7) NOT NULL DEFAULT '#0969DA',
  color_soft CHAR(7) NOT NULL DEFAULT '#E7F1FD',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_projects_owner FOREIGN KEY (owner_id) REFERENCES users(id),
  CONSTRAINT fk_projects_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL,
  INDEX idx_projects_owner (owner_id),
  INDEX idx_projects_status (status),
  INDEX idx_projects_dates (start_date, end_date)
) ENGINE=InnoDB;

CREATE TABLE milestones (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  project_id BIGINT NOT NULL,
  label VARCHAR(30) NOT NULL,
  due_date DATE NOT NULL,
  state ENUM('todo', 'current', 'done') NOT NULL DEFAULT 'todo',
  sort_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_milestones_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
  INDEX idx_milestones_project (project_id, sort_order)
) ENGINE=InnoDB;

CREATE TABLE project_members (
  project_id BIGINT NOT NULL,
  user_id BIGINT NOT NULL,
  member_role VARCHAR(40) NULL,
  joined_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (project_id, user_id),
  CONSTRAINT fk_project_members_project FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
  CONSTRAINT fk_project_members_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE assets (
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
