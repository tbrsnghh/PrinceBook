package com.example.backend.controllers;

import com.example.backend.dtos.OrderDTO;
import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.models.Order;
import com.example.backend.responses.ApiResponse;
import com.example.backend.services.OrderService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/order")
@RequiredArgsConstructor
public class OrderController {
    private final OrderService orderService;

    //create new Order
    @PostMapping
    public ResponseEntity<ApiResponse> createOrder(@Valid @RequestBody OrderDTO orderDTO, BindingResult result) {
        if (result.hasErrors()) {
            List<String> errors = result.getFieldErrors().stream()
                    .map(FieldError::getDefaultMessage).toList();
            ApiResponse apiResponse = ApiResponse.builder()
                    .data(errors)
                    .message("Validation Failed")
                    .status(HttpStatus.BAD_REQUEST.value())
                    .build();
            return ResponseEntity.badRequest().body(apiResponse);
        }
        Order newOrder = orderService.saveOrder(orderDTO);
        ApiResponse apiResponse = ApiResponse.builder()
                .data(newOrder)
                .message("Insert Successfully!")
                .status(HttpStatus.CREATED.value())
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    //get all Order
    @GetMapping("")
    public ResponseEntity<ApiResponse> getAllOrders() {
        ApiResponse apiResponse = ApiResponse.builder()
                .data(orderService.getAllOrders())
                .message("Get all successfully!")
                .status(HttpStatus.OK.value())
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }

    //get Order by username
    @GetMapping("/{username}")
    public ResponseEntity<ApiResponse> getOrder(@PathVariable String username) {
        List<Order> orderByUserName = orderService.findByUserName(username);
        if (orderByUserName.isEmpty()) {
            ApiResponse apiResponse = ApiResponse.builder()
                    .data(null)
                    .message("Order not found!")
                    .status(HttpStatus.NOT_FOUND.value())
                    .build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(apiResponse);
        }
        ApiResponse apiResponse = ApiResponse.builder()
                .data(orderByUserName)
                .message("Orders retrieved successfully!")
                .status(HttpStatus.OK.value())
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }

    // Tính số lượng đơn hàng
    @GetMapping("/countOrders")
    public ResponseEntity<ApiResponse> getOrderCount() {
        Long countOfOrders = orderService.calculateOfOrder();
        // kiểm tra nếu không có đơn hàng nào
        if (countOfOrders == 0) {
            return ResponseEntity.ok(ApiResponse.builder()
                    .data(countOfOrders)
                    .message("Khong co đon hang nao!")
                    .status(HttpStatus.OK.value())
                    .build());
        }
        ApiResponse apiResponse = ApiResponse.builder()
                .data(countOfOrders)
                .message("Count of orders retrieved successfully!")
                .status(HttpStatus.OK.value())
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }
    // Tính tổng doanh số
    @GetMapping("/sumOrders")
    public ResponseEntity<ApiResponse> getSumOrders() {
        Double sumOfOrders = orderService.calculateOfRevenue();
        if (sumOfOrders == 0) {
            return ResponseEntity.ok(ApiResponse.builder()
                    .data(sumOfOrders)
                    .message("Tong doanh so bang 0!")
                    .status(HttpStatus.OK.value())
                    .build());
        }
        ApiResponse apiResponse = ApiResponse.builder()
                .data(sumOfOrders)
                .message("Sum of orders retrieved successfully!")
                .status(HttpStatus.OK.value())
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }
}
