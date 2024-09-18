package com.example.backend.controllers;

import com.example.backend.dtos.BookDTO;
import com.example.backend.models.Book;
import com.example.backend.responses.ApiResponse;
import com.example.backend.services.BookService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("api/book")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @GetMapping
    public ResponseEntity<ApiResponse> getAllBooks() {
        ApiResponse apiResponse = ApiResponse.builder()
                .data(bookService.getAllBooks())
                .message("success")
                .status(HttpStatus.OK.value())
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable Long id) {
        return bookService.getBookById(id);
    }

    @PostMapping("")
    public ResponseEntity<ApiResponse> addBook(@Valid @RequestBody BookDTO bookDTO, BindingResult result) {
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
        Book newBook = bookService.saveBook(bookDTO);
        ApiResponse apiResponse = ApiResponse.builder()
                .data(newBook)
                .message("Insert successfully")
                .status(HttpStatus.CREATED.value())
                .build();

        return ResponseEntity.ok().body(apiResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateBook(@Valid @PathVariable Long id, @RequestBody BookDTO bookDTO, BindingResult result) {
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

        Book updatedBook = bookService.updateBook(id, bookDTO);
        if (updatedBook == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found");
        }
        ApiResponse apiResponse = ApiResponse.builder()
                .data(updatedBook)
                .message("Update successfully")
                .status(HttpStatus.OK.value())
                .build();

        return ResponseEntity.ok().body(apiResponse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteBook(@PathVariable Long id) {
        Book book = bookService.getBookById(id);
        if (book == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Book not found");
        }
        bookService.deleteCategory(id);
        ApiResponse apiResponse = ApiResponse.builder()
                .data(id)
                .message("Delete successfully")
                .status(HttpStatus.OK.value())
                .build();

        return ResponseEntity.ok().body(apiResponse);
    }
}
