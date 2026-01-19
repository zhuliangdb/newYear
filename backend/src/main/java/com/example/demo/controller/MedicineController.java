package com.example.demo.controller;

import com.example.demo.entity.Medicine;
import com.example.demo.service.MedicineService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/medicine")
public class MedicineController {
    @Resource
    private MedicineService medicineService;

    @GetMapping("/list")
    public List<Medicine> list() {
        return medicineService.selectAll();
    }

    @GetMapping("/key")
    public List<Medicine> keyMedicines() {
        return medicineService.selectKeyMedicines();
    }

    @GetMapping("/regular")
    public List<Medicine> regularMedicines() {
        return medicineService.selectRegularMedicines();
    }

    @PostMapping("/add")
    public int add(@RequestBody Medicine medicine) {
        return medicineService.insert(medicine);
    }

    @PutMapping("/update")
    public int update(@RequestBody Medicine medicine) {
        return medicineService.updateByPrimaryKey(medicine);
    }

    @DeleteMapping("/delete/{id}")
    public int delete(@PathVariable Long id) {
        return medicineService.deleteByPrimaryKey(id);
    }

    @GetMapping("/{id}")
    public Medicine get(@PathVariable Long id) {
        return medicineService.selectByPrimaryKey(id);
    }
}