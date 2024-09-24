package com.example.backend.controllers;

import com.example.backend.dtos.OrderDetailDTO;
import com.example.backend.models.OrderDetail;
import com.example.backend.responses.ApiResponse;
import com.example.backend.responses.OrderDetailResponse;
import com.example.backend.services.OrderDetailService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/orderDetail")
@RequiredArgsConstructor
public class OrderDetailController {
    private final OrderDetailService orderDetailService;

    @GetMapping("/{id}")
    public OrderDetail getOrderDetailById(@PathVariable Long id) {
        return orderDetailService.getOrderDetailById(id);
    }

    @PostMapping("")
    public ResponseEntity<ApiResponse> createOrderDetail(@Valid @RequestBody OrderDetailDTO orderDetailDTO, BindingResult result) {
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
        OrderDetail orderDetail = orderDetailService.saveOrderDetail(orderDetailDTO);
        ApiResponse apiResponse = ApiResponse.builder()
                .data(orderDetail)
                .message("Success")
                .status(HttpStatus.CREATED.value())
                .build();

        return ResponseEntity.ok().body(apiResponse);
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<?> getOrderDetails(@Valid @PathVariable("orderId") Long orderId) {
        List<OrderDetail> orderDetails=orderDetailService.findByOrderId(orderId);

        if (orderDetails.isEmpty()) {
            ApiResponse apiResponse = ApiResponse.builder()
                    .message("Order not found")
                    .status(HttpStatus.NOT_FOUND.value())
                    .build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(apiResponse);
        }

        List<OrderDetailResponse> orderDetailResponses=orderDetails
                .stream()
                .map(OrderDetailResponse::fromOrderDetail)
                .toList();
        ApiResponse apiResponse = ApiResponse.builder()
                .data(orderDetailResponses)
                .message("Get List Order Details Success with Order Id: " + orderId)
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }

}
