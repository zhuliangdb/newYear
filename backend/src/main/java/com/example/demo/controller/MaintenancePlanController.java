package com.example.demo.controller;

import com.example.demo.entity.MaintenancePlan;
import com.example.demo.service.MaintenancePlanService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/maintenance-plan")
public class MaintenancePlanController {
    @Resource
    private MaintenancePlanService maintenancePlanService;

    @GetMapping("/list")
    public List<MaintenancePlan> list() {
        return maintenancePlanService.selectAll();
    }

    @PostMapping("/generate")
    public MaintenancePlan generate(@RequestParam String planDate, @RequestParam String hospitalName, @RequestParam boolean isKeyMedicine) throws ParseException {
        Date date = new SimpleDateFormat("yyyy-MM-dd").parse(planDate);
        return maintenancePlanService.generateMaintenancePlan(date, hospitalName, isKeyMedicine);
    }

    @GetMapping("/{id}")
    public MaintenancePlan get(@PathVariable Long id) {
        return maintenancePlanService.selectByPrimaryKey(id);
    }

    @DeleteMapping("/delete/{id}")
    public int delete(@PathVariable Long id) {
        return maintenancePlanService.deleteByPrimaryKey(id);
    }
}