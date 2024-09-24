package com.example.backend.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class OrderDTO {
    @JsonProperty("username")
    private String userName;

    private String email;

    @JsonProperty("phone_number")
    @NotBlank(message = "So dien thoai phai it nhat 10 ky tu")
    private String phoneNumber;

    private String address;

    private String note;

    private String status;

    @JsonProperty("total_Price")
    private Double totalPrice;

    @JsonProperty("shipping_method")
    private String shippingMethod;

    @JsonProperty("shipping_address")
    private String shippingAddress;

    @JsonProperty("shipping_date")
    private LocalDate shippingDate;

    @JsonProperty("payment_method")
    private String paymentMethod;

//    @JsonProperty("user_id")
//    @Min(value=1,message = "user' ID must be >0")
//    private Long userId;

}
