package com.example.backend.services;

import com.example.backend.dtos.BookDTO;
import com.example.backend.dtos.CategoryDTO;
import com.example.backend.models.Book;
import com.example.backend.models.Category;

import java.util.List;

public interface IBookService {
    List<Book> getAllBooks();
    Book getBookById(Long id);
    Book saveBook(BookDTO bookDTO);
    Book updateBook(Long id, BookDTO bookDTO);
    void deleteCategory(Long id);
}
