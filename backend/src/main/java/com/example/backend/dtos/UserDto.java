package com.example.backend.dtos;

import java.time.LocalDate;

import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.FieldDefaults;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserDto {


    @NotBlank(message = "username can not be blank")
    private String username;
    @NotBlank(message = "Email can not be blank")
    private String gmail;

    private String password;
    @NotBlank(message = "Phone can not be blank")
    private String phone;

    private LocalDate ngay_sinh;
    private String role;
}
