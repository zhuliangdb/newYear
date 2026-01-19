package com.example.demo.mapper;

import com.example.demo.entity.MaintenancePlan;
import java.util.List;

public interface MaintenancePlanMapper {
    int deleteByPrimaryKey(Long id);

    int insert(MaintenancePlan record);

    int insertSelective(MaintenancePlan record);

    MaintenancePlan selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(MaintenancePlan record);

    int updateByPrimaryKey(MaintenancePlan record);

    List<MaintenancePlan> selectAll();

    MaintenancePlan selectByPlanCode(String planCode);
}