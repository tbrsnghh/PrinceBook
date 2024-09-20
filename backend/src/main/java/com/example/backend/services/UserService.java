package com.example.backend.services;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dtos.UserDto;
import com.example.backend.models.User;
import com.example.backend.repositories.UserRepository;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserService {
        UserRepository userRepository;



    public User save(UserDto userDto) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
        User user = User.builder()
                .username(userDto.getUsername())
                .gmail(userDto.getGmail())
                .password(passwordEncoder.encode(  userDto.getPassword()))
                .phone(userDto.getPhone())
                .ngay_sinh(userDto.getNgay_sinh())
                .role(userDto.getRole())
                .build();
        return userRepository.save(user);
    }
}
