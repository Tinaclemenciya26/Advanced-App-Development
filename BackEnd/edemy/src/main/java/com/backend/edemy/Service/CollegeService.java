package com.backend.edemy.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.backend.edemy.Entity.CollegeEntity;
import com.backend.edemy.Repository.CollegeRepository;

@Service
public class CollegeService {

    @Autowired
    private CollegeRepository collegeRepository;

    public List<CollegeEntity> getAllCollege() {
        return collegeRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<CollegeEntity> getCollegeById(Long id) {
        return collegeRepository.findById(id);
    }

    @SuppressWarnings("null")
    public CollegeEntity createCollege(CollegeEntity collegeEntity) {
        return collegeRepository.save(collegeEntity);
    }

    @SuppressWarnings("null")
    public void deleteCollege(Long id) {
        collegeRepository.deleteById(id);
    }

    public List<CollegeEntity> getByCollegeName(String name) {
        return collegeRepository.findByCollegeName(name);
    }

    @SuppressWarnings("null")
    public CollegeEntity updateCollege(Long id, CollegeEntity collegeEntity) {
        Optional<CollegeEntity> updateCollegeEntity = collegeRepository.findById(id);
        if (updateCollegeEntity.isPresent()) {
            CollegeEntity existingCollege = updateCollegeEntity.get();
            existingCollege.setCollegeName(collegeEntity.getCollegeName());
            existingCollege.setCourses(collegeEntity.getCourses());
            existingCollege.setAddr(collegeEntity.getAddr());
            return collegeRepository.save(existingCollege);
        }
        return null;
    }
}
