package com.example.demo.service.impl;

import com.example.demo.entity.MaintenancePlan;
import com.example.demo.entity.MaintenancePlanDetail;
import com.example.demo.entity.Medicine;
import com.example.demo.mapper.MaintenancePlanDetailMapper;
import com.example.demo.mapper.MaintenancePlanMapper;
import com.example.demo.service.MaintenancePlanService;
import com.example.demo.service.MedicineService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class MaintenancePlanServiceImpl implements MaintenancePlanService {
    @Resource
    private MaintenancePlanMapper maintenancePlanMapper;

    @Resource
    private MaintenancePlanDetailMapper maintenancePlanDetailMapper;

    @Resource
    private MedicineService medicineService;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return maintenancePlanMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(MaintenancePlan record) {
        return maintenancePlanMapper.insert(record);
    }

    @Override
    public int insertSelective(MaintenancePlan record) {
        return maintenancePlanMapper.insertSelective(record);
    }

    @Override
    public MaintenancePlan selectByPrimaryKey(Long id) {
        return maintenancePlanMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(MaintenancePlan record) {
        return maintenancePlanMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(MaintenancePlan record) {
        return maintenancePlanMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<MaintenancePlan> selectAll() {
        return maintenancePlanMapper.selectAll();
    }

    @Override
    public MaintenancePlan selectByPlanCode(String planCode) {
        return maintenancePlanMapper.selectByPlanCode(planCode);
    }

    @Override
    @Transactional
    public MaintenancePlan generateMaintenancePlan(Date planDate, String hospitalName, boolean isKeyMedicine) {
        // 生成计划编码
        String planCode = "MP" + new java.text.SimpleDateFormat("yyyyMMddHHmmss").format(new Date());

        // 创建养护计划
        MaintenancePlan plan = new MaintenancePlan();
        plan.setPlanCode(planCode);
        plan.setPlanDate(planDate);
        plan.setHospitalName(hospitalName);
        plan.setCreateTime(new Date());
        plan.setUpdateTime(new Date());

        maintenancePlanMapper.insert(plan);

        // 获取药品列表
        List<Medicine> medicines;
        if (isKeyMedicine) {
            medicines = medicineService.selectKeyMedicines();
        } else {
            medicines = medicineService.selectRegularMedicines();
        }

        // 创建养护计划详情
        List<MaintenancePlanDetail> details = new ArrayList<>();
        for (Medicine medicine : medicines) {
            MaintenancePlanDetail detail = new MaintenancePlanDetail();
            detail.setPlanId(plan.getId());
            detail.setMedicineId(medicine.getId());
            detail.setMaintenanceType(isKeyMedicine ? "重点养护" : "常规养护");
            detail.setStatus("待执行");
            detail.setCreateTime(new Date());
            detail.setUpdateTime(new Date());
            details.add(detail);
        }

        if (!details.isEmpty()) {
            maintenancePlanDetailMapper.batchInsert(details);
        }

        return plan;
    }
}