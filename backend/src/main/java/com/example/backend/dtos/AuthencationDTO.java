package com.example.backend.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuthencationDTO {
    
    @NotBlank(message = "Email phải là một email")
     String username;
    @NotBlank(message = "Password phải là một password")
     String password;
}
