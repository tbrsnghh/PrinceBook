package com.example.backend.dtos;

import java.time.LocalDate;

import lombok.*;
import lombok.experimental.FieldDefaults;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDto {

    private String username;
    private String gmail;
    private String password;
    private String phone;
    private LocalDate ngay_sinh;
    private String role;
}
