package com.backend.edemy.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.edemy.Entity.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, Long> {
    List<UserEntity> findAllByName(String name);

    Optional<UserEntity> findByEmail(String username);
}
