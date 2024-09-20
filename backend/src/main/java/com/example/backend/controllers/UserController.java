package com.example.backend.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dtos.UserDto;
import com.example.backend.models.User;
import com.example.backend.responses.ApiResponse;
import com.example.backend.services.UserService;

import jakarta.validation.Valid;
import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@RestController
@RequestMapping("api/user")
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
public class UserController {
    
        UserService userService;


@PostMapping("register")
public ResponseEntity<ApiResponse> register(@Valid @RequestBody  UserDto userDto, BindingResult Result) {
    if(Result.hasErrors()) {
        List<String> errors = Result.getFieldErrors().stream()  
                .map(FieldError -> FieldError.getDefaultMessage())
                .toList();
                ApiResponse apiResponse = ApiResponse.builder()
                .data(errors)
                .message("Validation failed")
                .status(HttpStatus.BAD_REQUEST.value())
                .build();
        return ResponseEntity.badRequest().body(apiResponse);
    }

    User user = userService.save(userDto);
     ApiResponse apiResponse = ApiResponse.builder()
                .data(user)
                .message("User created successfully")
                .status(HttpStatus.OK.value())
                .build();
                return ResponseEntity.ok(apiResponse);
}
        


}
