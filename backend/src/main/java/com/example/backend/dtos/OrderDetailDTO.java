package com.example.backend.dtos;

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

public class OrderDetailDTO {
    @JsonProperty("order_id")
    @Min(value=1,message = "Order'ID must be > 0")
    private Long orderId;

    @JsonProperty("book_id")
    @Min(value=1,message = "Book'ID must be > 0")
    private Long bookId;

    private Double price;

    @Min(value=1,message = "Count must be > 0")
    private int count;

    @JsonProperty("total_price")
    @Min(value=0,message = "total money  must be >= 0")
    private Double totalPrice;
}
