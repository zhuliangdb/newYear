package com.example.demo.service.impl;

import com.example.demo.entity.Medicine;
import com.example.demo.mapper.MedicineMapper;
import com.example.demo.service.MedicineService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class MedicineServiceImpl implements MedicineService {
    @Resource
    private MedicineMapper medicineMapper;

    @Override
    public int deleteByPrimaryKey(Long id) {
        return medicineMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(Medicine record) {
        return medicineMapper.insert(record);
    }

    @Override
    public int insertSelective(Medicine record) {
        return medicineMapper.insertSelective(record);
    }

    @Override
    public Medicine selectByPrimaryKey(Long id) {
        return medicineMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(Medicine record) {
        return medicineMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(Medicine record) {
        return medicineMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<Medicine> selectAll() {
        return medicineMapper.selectAll();
    }

    @Override
    public List<Medicine> selectKeyMedicines() {
        return medicineMapper.selectKeyMedicines();
    }

    @Override
    public List<Medicine> selectRegularMedicines() {
        return medicineMapper.selectRegularMedicines();
    }
}