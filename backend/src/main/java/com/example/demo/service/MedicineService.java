package com.example.demo.service;

import com.example.demo.entity.Medicine;
import java.util.List;

public interface MedicineService {
    int deleteByPrimaryKey(Long id);

    int insert(Medicine record);

    int insertSelective(Medicine record);

    Medicine selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(Medicine record);

    int updateByPrimaryKey(Medicine record);

    List<Medicine> selectAll();

    List<Medicine> selectKeyMedicines();

    List<Medicine> selectRegularMedicines();
}