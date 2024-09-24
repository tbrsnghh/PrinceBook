package com.example.backend.responses;

import com.example.backend.models.Book;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookResponse extends BaseResponse{
    private Long id;
    private String name;
    private String author;
    private String publisher;
    private String publishedDate;
    private int pages;
    private String language;
    private Long price;
    private String description;

    @JsonProperty("category_id")
    private Long categoryId;

    public static BookResponse fromBook(Book book) {
        BookResponse bookResponse = BookResponse.builder()
                .id(book.getId())
                .name(book.getName())
                .author(book.getAuthor())
                .publisher(book.getPublisher())
                .publishedDate(book.getPublishedDate())
                .pages(book.getPages())
                .language(book.getLanguage())
                .price(book.getPrice())
                .description(book.getDescription())
                .categoryId(book.getCategory().getId())
                .build();
        bookResponse.setCreatedAt(book.getCreatedAt());
        bookResponse.setUpdatedAt(book.getUpdatedAt());
        return bookResponse;
    }

}
