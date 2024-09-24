package com.example.backend.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@Entity
@Table(name = "books")
@NoArgsConstructor
@AllArgsConstructor
public class Book extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(max = 255)
    private String name;

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
    @NotNull
    private int pages;

    // Ngôn ngữ
    private String language;

    // Giá
    @NotNull
    @Column(nullable = false)
    private Long price;

    // Mô tả
    @Column(columnDefinition = "TEXT")
    private String description;

    // Khóa ngoại từ bảng Category
//    @ManyToOne
//    @JoinColumn(name = "category_id", nullable = false)
//    private Category category;

    @ManyToOne(optional = false)
    @JoinColumn(name = "category_id",nullable = false)
    private Category category;
}
