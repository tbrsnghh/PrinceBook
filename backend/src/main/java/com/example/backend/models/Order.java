package com.example.backend.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Entity
@Table(name="orders")
@Getter
@Setter
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Order extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="username",length = 100)
    private String userName;

    @Column(length = 100)
    private String email;

    @Column(name="phone_number",length = 100)
    private String phoneNumber;

    @Column(length = 100)
    private String address;

    @Column(length = 100)
    private String note;

    @Column(name="order_date")
    private Date orderDate;

    private String status;

    @Column(name="total_price")
    private Double totalPrice;

    @Column(name="shipping_method")
    private String shippingMethod;

    @Column(name="shipping_address")
    private String shippingAddress;

    @Column(name="shipping_date")
    private LocalDate shippingDate;

    @Column(name="payment_method")
    private String paymentMethod;

    @Column(name="active")
    private Boolean active;

//    @Column(name = "user_id")
//    private Long userId;

//    @ManyToOne
//    @JoinColumn(name="user_id")
//    private User user;
}
