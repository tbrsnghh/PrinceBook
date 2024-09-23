package com.example.backend.services;

import java.util.List;

import com.example.backend.dtos.UserDto;
import com.example.backend.models.User;

public interface IUserService {
    
    List<User> getAllUsers();

    User save(UserDto userDto);

    User update(UserDto userDto);

    void delete(Long id);
 
    User deleteM(Long id);

    List<User> findByDelete();
    
}
