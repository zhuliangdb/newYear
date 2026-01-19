package com.example.demo.controller;

import com.example.demo.entity.MaintenancePlanDetail;
import com.example.demo.mapper.MaintenancePlanDetailMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/maintenance-plan/detail")
public class MaintenancePlanDetailController {
    @Resource
    private MaintenancePlanDetailMapper maintenancePlanDetailMapper;

    @GetMapping("/{planId}")
    public List<MaintenancePlanDetail> getByPlanId(@PathVariable Long planId) {
        return maintenancePlanDetailMapper.selectByPlanId(planId);
    }
}