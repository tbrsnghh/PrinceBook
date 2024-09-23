package com.example.backend.responses;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthenticationResponses {
    String token;
    boolean authenticate;
    String username;
    String role;
    String phone;
    String gmail;
    LocalDate ngay_sinh;
    String address;
}
