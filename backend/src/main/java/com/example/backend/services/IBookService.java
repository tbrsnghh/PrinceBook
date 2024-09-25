package com.example.backend.services;

import com.example.backend.dtos.BookDTO;
import com.example.backend.dtos.BookImageDTO;
import com.example.backend.dtos.CategoryDTO;
import com.example.backend.models.Book;
import com.example.backend.models.BookImage;
import com.example.backend.models.Category;
import com.example.backend.responses.BookResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface IBookService {
    Page<BookResponse> getAllBookPaginated(PageRequest pageRequest);
    List<Book> getAllBooks();
    Book getBookById(Long id);
    Book saveBook(BookDTO bookDTO);
    Book updateBook(Long id, BookDTO bookDTO);
    void deleteBook(Long id);
    BookImage saveBookImage(Long bookId, BookImageDTO bookImageDTO);
    List<BookImage> getAllBookImages(Long bookId);
    BookImage getBookImageById(Long bookImageId);
    void deleteBookImageById(Long bookImageId);

    Long countAllBook();
    List<Book> searchBooksByName(String bookName);
    List<Book> findBooksByCategoryName(String categoryName);

}
