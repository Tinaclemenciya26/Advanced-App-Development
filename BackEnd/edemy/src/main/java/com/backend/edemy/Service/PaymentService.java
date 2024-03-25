package com.backend.edemy.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.backend.edemy.Entity.PaymentEntity;
import com.backend.edemy.Repository.PaymentRepository;
import com.backend.edemy.dto.PaymentDTO;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public List<PaymentEntity> getAllPayments() {
        return paymentRepository.findAll();
    }

    @SuppressWarnings("null")
    public Optional<PaymentEntity> getPaymentById(Long id) {
        return paymentRepository.findById(id);
    }

    @SuppressWarnings("null")
    public PaymentEntity createPayment(PaymentEntity joinedCollege) {
        return paymentRepository.save(joinedCollege);
    }

    @SuppressWarnings("null")
    public void deletePayment(Long id) {
        paymentRepository.deleteById(id);
    }

    public List<PaymentEntity> getPaymentByName(String name) {
        return paymentRepository.findByName(name);
    }

    @SuppressWarnings("null")
    public PaymentEntity updatePayment(Long id, PaymentDTO paymentDTO) {
        Optional<PaymentEntity> updatePaymentEntity = paymentRepository.findById(id);
        if (updatePaymentEntity.isPresent()) {
            PaymentEntity updatedPaymentEntity = updatePaymentEntity.get();
            updatedPaymentEntity.setCourses(paymentDTO.getCourses());
            updatedPaymentEntity.setAddress(paymentDTO.getAddress());
            updatedPaymentEntity.setDate(paymentDTO.getDate());
            updatedPaymentEntity.setStatus(paymentDTO.getStatus());
            return paymentRepository.save(updatedPaymentEntity);
        }
        return null;
    }
}
