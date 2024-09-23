package com.example.backend.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.backend.models.User;

public interface UserRepository extends JpaRepository<User, Long> {


    User findByUsername(String username);

@Query("select u from User u  where u.deleteAt is null")
List<User> findAll();

@Query("select u from User u  where u.deleteAt IS NOT NULL ")
List<User> findByDelete();
    
}
