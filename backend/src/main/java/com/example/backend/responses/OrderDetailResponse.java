package com.example.backend.responses;

import com.example.backend.models.OrderDetail;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetailResponse {
    private Long id;
    @JsonProperty("order_id")
    private Long orderId;

    @JsonProperty("book_id")
    private Long bookId;

    private Double price;

    private int count;

    @JsonProperty("total_price")
    private Double totalPrice;

    public static OrderDetailResponse fromOrderDetail(OrderDetail orderDetail) {
        return OrderDetailResponse.builder()
                .id(orderDetail.getId())
                .orderId(orderDetail.getOrder().getId())
                .bookId(orderDetail.getBook().getId())
                .price(orderDetail.getPrice())
                .count(orderDetail.getCount())
                .totalPrice(orderDetail.getTotalPrice())
                .build();
    }
}
