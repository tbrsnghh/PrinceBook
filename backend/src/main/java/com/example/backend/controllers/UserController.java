package com.example.backend.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
        public ResponseEntity<ApiResponse> register(@Valid @RequestBody UserDto userDto, BindingResult Result) {
                if (Result.hasErrors()) {
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

        @PutMapping("")
        public ResponseEntity<ApiResponse> updateUser(@Valid @RequestBody UserDto userDto, BindingResult Result) {
                if (Result.hasErrors()) {
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
                User user = userService.update(userDto);
                ApiResponse apiResponse = ApiResponse.builder()
                                .data(user)
                                .message("User updated successfully")
                                .status(HttpStatus.OK.value())
                                .build();
                return ResponseEntity.ok(apiResponse);

        }

        @GetMapping("")
        public ResponseEntity<ApiResponse> getAllUsers() {
                List<User> users = userService.getAllUsers();
                ApiResponse apiResponse = ApiResponse.builder()
                                .data(users)
                                .message("success")
                                .status(HttpStatus.OK.value())
                                .build();
                return ResponseEntity.ok(apiResponse);
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<ApiResponse> deleteUser(@PathVariable Long id) {
                userService.delete(id);
                ApiResponse apiResponse = ApiResponse.builder()
                                .data(id)
                                .message("User deleted successfully")
                                .status(HttpStatus.OK.value())
                                .build();
                return ResponseEntity.ok(apiResponse);
        }
        @PutMapping("/delete/{id}")
        public ResponseEntity<ApiResponse> update(@PathVariable Long id) {
                User user = userService.deleteM(id);
                ApiResponse apiResponse = ApiResponse.builder()
                                .data(user)
                                .message("User updated successfully")
                                .status(HttpStatus.OK.value())
                                .build();
                return ResponseEntity.ok(apiResponse);
        }

        @GetMapping("/delete")
        public ResponseEntity<ApiResponse> findByDelete() {
                List<User> users = userService.findByDelete();
                ApiResponse apiResponse = ApiResponse.builder()
                                .data(users)
                                .message("success")
                                .status(HttpStatus.OK.value())
                                .build();
                return ResponseEntity.ok(apiResponse);
        }
        @PutMapping("/restore/{id}")
        public ResponseEntity<ApiResponse> restore(@PathVariable Long id) {
                User user = userService.restore(id);
                ApiResponse apiResponse = ApiResponse.builder()
                                .data(user)
                                .message("User updated successfully")
                                .status(HttpStatus.OK.value())
                                .build();
                return ResponseEntity.ok(apiResponse);
        }
}