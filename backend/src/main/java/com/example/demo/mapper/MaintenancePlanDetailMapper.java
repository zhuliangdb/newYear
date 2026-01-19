package com.example.demo.mapper;

import com.example.demo.entity.MaintenancePlanDetail;
import java.util.List;

public interface MaintenancePlanDetailMapper {
    int deleteByPrimaryKey(Long id);

    int insert(MaintenancePlanDetail record);

    int insertSelective(MaintenancePlanDetail record);

    MaintenancePlanDetail selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(MaintenancePlanDetail record);

    int updateByPrimaryKey(MaintenancePlanDetail record);

    List<MaintenancePlanDetail> selectByPlanId(Long planId);

    int batchInsert(List<MaintenancePlanDetail> details);
}