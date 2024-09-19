package com.example.backend.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookDTO {
    @NotNull
    @Size(max = 255)
    private String name;

    private String imagePath;

    // Tác giả
    @NotNull
    @Size(max = 100)
    private String author;

    // Nhà sản xuất
    @NotNull
    @Size(max = 100)
    private String publisher;

    // Năm xuất bản
    private String publishedDate;

    // Số trang
    private int pages;

    // Ngôn ngữ
    private String language;

    // Giá
    private Long price;

    // Mô tả
    private String description;

    @JsonProperty("category_id")
    @Min(value = 1, message = "Id của category phải lớn hơn 0")
    private Long category_id;
}
