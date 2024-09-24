package com.example.backend.services;

import java.util.List;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dtos.UserDto;
import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.models.User;
import com.example.backend.repositories.UserRepository;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserService implements IUserService {
        @Override
    public List<User> getAllUsers() {
     
        return userRepository.findAll();
    }

    @Override
    public User update( UserDto userDto) {
      User user = userRepository.findByUsername(userDto.getUsername());
      if(!userDto.getPassword().isEmpty()) {
          PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
          user.setPassword(passwordEncoder.encode(userDto.getPassword()));
      }
    
      user.setGmail(userDto.getGmail());
      user.setPhone(userDto.getPhone());
      user.setNgay_sinh(userDto.getNgay_sinh());
      user.setRole(userDto.getRole());
      return userRepository.save(user);
    
    }

        UserRepository userRepository;


    @Override
    public User save(UserDto userDto) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

        User user = userRepository.findByUsername(userDto.getUsername());
        if (user != null) {
            throw new ResourceNotFoundException("tai khoan da ton tai");
        }
       
        User usera = User.builder()
                .username(userDto.getUsername())
                .gmail(userDto.getGmail())
                .password(passwordEncoder.encode(  userDto.getPassword()))
                .phone(userDto.getPhone())
                .ngay_sinh(userDto.getNgay_sinh())
                
                .role( !userDto.getRole().isEmpty() ? userDto.getRole() : "USER")
                .build();
        return userRepository.save(usera);
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
        
    }

    @Override
    public User deleteM(Long id) {
     User user =   userRepository.findById(id).get();

     user.setDeleteAt(java.time.LocalDateTime.now());
        return   userRepository.save(user);
       
    }

    @Override
    public List<User> findByDelete() {
        return userRepository.findByDelete();
       
    }

    // @Override
    // public User findByUsername(String username) {
       
    //     return userRepository.findByUsername(username);
    // }

  
    public User restore(Long id) {
        User user = userRepository.findById(id).get();
        user.setDeleteAt(null);
        return userRepository.save(user);
    }
   

}
