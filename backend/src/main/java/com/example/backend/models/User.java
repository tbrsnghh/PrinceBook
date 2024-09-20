package com.example.backend.models;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Entity
@Getter
@Setter
@Table(name = "user")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User  extends BaseEntity {
    


     @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", unique = true)
    private  String username;
    private String gmail;
    private  String password;
    private  String phone;
    private  LocalDate ngay_sinh;


   private String role;

 @Column(name= "deleted_at")
   private LocalDateTime deleteAt;
}
