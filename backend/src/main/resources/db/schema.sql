-- 药品信息表
CREATE TABLE IF NOT EXISTS medicine (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    medicine_name VARCHAR(255) NOT NULL COMMENT '药品名称',
    medicine_code VARCHAR(50) NOT NULL COMMENT '药品编码',
    specification VARCHAR(100) COMMENT '规格',
    manufacturer VARCHAR(255) COMMENT '生产厂家',
    maintenance_cycle INT NOT NULL COMMENT '养护周期（天）',
    is_key_medicine INT DEFAULT 0 COMMENT '是否重点养护药品（0：普通，1：重点）',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) COMMENT '药品信息表';

-- 养护计划表
CREATE TABLE IF NOT EXISTS maintenance_plan (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    plan_code VARCHAR(50) NOT NULL COMMENT '计划编码',
    plan_date DATE NOT NULL COMMENT '计划日期',
    hospital_name VARCHAR(255) NOT NULL COMMENT '医院名称',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) COMMENT '养护计划表';

-- 养护计划详情表
CREATE TABLE IF NOT EXISTS maintenance_plan_detail (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    plan_id BIGINT NOT NULL COMMENT '养护计划ID',
    medicine_id BIGINT NOT NULL COMMENT '药品ID',
    maintenance_type VARCHAR(50) COMMENT '养护类型',
    status VARCHAR(20) DEFAULT '待执行' COMMENT '状态（待执行、已执行、已完成）',
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    update_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (plan_id) REFERENCES maintenance_plan(id) ON DELETE CASCADE,
    FOREIGN KEY (medicine_id) REFERENCES medicine(id) ON DELETE CASCADE
) COMMENT '养护计划详情表';