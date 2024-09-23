package com.example.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Table(name = "book_images")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookImage{
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    private String imagePath;

    @ManyToOne
    @JoinColumn(name = "book_id")
    @ToString.Exclude
    private Book book;
}
