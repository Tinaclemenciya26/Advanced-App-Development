package com.backend.edemy.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.edemy.Entity.EnrollEntity;
import com.backend.edemy.Repository.EnrollRepository;
import com.backend.edemy.dto.EnrollCourseUpdate;

@Service
public class EnrollService {

    @Autowired
    private EnrollRepository enrollRepository;

    public List<EnrollEntity> getAllEnrollments() {
        return enrollRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<EnrollEntity> getEnrollmentById(Long id) {
        return enrollRepository.findById(id);
    }

    @SuppressWarnings("null")
    public EnrollEntity createEnrollment(EnrollEntity enrollEntity) {
        return enrollRepository.save(enrollEntity);
    }

    @SuppressWarnings("null")
    public void deleteEnrollment(Long id) {
        enrollRepository.deleteById(id);
    }

    public List<EnrollEntity> getEnrollmentByName(String name) {
        return enrollRepository.findByName(name);
    }

    @SuppressWarnings("null")
    public EnrollEntity updateEnrollment(Long id, EnrollCourseUpdate enrollCourseUpdate) {
        Optional<EnrollEntity> updateEnrollment = enrollRepository.findById(id);
        if (updateEnrollment.isPresent()) {
            EnrollEntity updatedEnrollment = updateEnrollment.get();
            updatedEnrollment.setName(enrollCourseUpdate.getName());
            updatedEnrollment.setEmail(enrollCourseUpdate.getEmail());
            updatedEnrollment.setGender(enrollCourseUpdate.getGender());
            updatedEnrollment.setMobile(enrollCourseUpdate.getMobile());
            updatedEnrollment.setDob(enrollCourseUpdate.getDob());
            updatedEnrollment.setSslc(enrollCourseUpdate.getSslc());
            updatedEnrollment.setHsc(enrollCourseUpdate.getHsc());
            updatedEnrollment.setAge(enrollCourseUpdate.getAge());
            updatedEnrollment.setCountry(enrollCourseUpdate.getCountry());
            updatedEnrollment.setAddress(enrollCourseUpdate.getAddress());
            return enrollRepository.save(updatedEnrollment);
        }
        return null;
    }
}
