package com.example.backend.services;

import com.example.backend.dtos.BookDTO;
import com.example.backend.models.Book;
import com.example.backend.models.Category;
import com.example.backend.repositories.BookCategory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService implements IBookService {
    private final BookCategory bookCategory;
    private final CategoryService categoryService;


    @Override
    public List<Book> getAllBooks() {
        return bookCategory.findAll();
    }

    @Override
    public Book getBookById(Long id) {
        return bookCategory.findById(id).orElse(null);
    }

    @Override
    public Book saveBook(BookDTO bookDTO) {
        Category category_id = categoryService.getCategoryById(bookDTO.getCategory_id());

        Book book = Book.builder()
                .name(bookDTO.getName())
                .imagePath(bookDTO.getImagePath())
                .author(bookDTO.getAuthor())
                .publisher(bookDTO.getPublisher())
                .publishedDate(bookDTO.getPublishedDate())
                .pages(bookDTO.getPages())
                .language(bookDTO.getLanguage())
                .category(category_id)
                .build();
        return bookCategory.save(book);
    }

    @Override
    public Book updateBook(Long id, BookDTO bookDTO) {
        Book bookUpdate = getBookById(id);
        bookUpdate.setName(bookDTO.getName());
        bookUpdate.setImagePath(bookDTO.getImagePath());
        bookUpdate.setAuthor(bookDTO.getAuthor());
        bookUpdate.setPublisher(bookDTO.getPublisher());
        bookUpdate.setPublishedDate(bookDTO.getPublishedDate());
        bookUpdate.setPages(bookDTO.getPages());
        bookUpdate.setLanguage(bookDTO.getLanguage());
        return bookCategory.save(bookUpdate);
    }

    @Override
    public void deleteCategory(Long id) {
        Book bookDelete = getBookById(id);
        bookCategory.delete(bookDelete);
    }
}
