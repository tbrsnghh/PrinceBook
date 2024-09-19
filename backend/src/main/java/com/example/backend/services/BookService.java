package com.example.backend.services;

import com.example.backend.dtos.BookDTO;
import com.example.backend.dtos.BookImageDTO;
import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.models.Book;
import com.example.backend.models.BookImage;
import com.example.backend.models.Category;
import com.example.backend.repositories.BookImageRepository;
import com.example.backend.repositories.BookRepository;
import com.example.backend.repositories.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.security.InvalidParameterException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService implements IBookService {
    private final BookRepository bookCategory;
    private final CategoryRepository categoryRepository;
    private final BookImageRepository bookImageRepository;


    @Override
    public List<Book> getAllBooks() {
        return bookCategory.findAll();
    }

    @Override
    public Book getBookById(Long id) {
        return bookCategory.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Book not found with id " + id));
    }

    @Override
    public Book saveBook(BookDTO bookDTO) {
        // Kiểm tra xem category_id đã tồn tại hay chưa
        Category existingCategory = categoryRepository.
                findById(bookDTO.getCategory_id())
                .orElseThrow(()-> new ResourceNotFoundException("Category not found with id " + bookDTO.getCategory_id()));

        Book book = Book.builder()
                .name(bookDTO.getName())
                .imagePath(bookDTO.getImagePath())
                .author(bookDTO.getAuthor())
                .publisher(bookDTO.getPublisher())
                .publishedDate(bookDTO.getPublishedDate())
                .pages(bookDTO.getPages())
                .language(bookDTO.getLanguage())
                .price(bookDTO.getPrice())
                .description(bookDTO.getDescription())
                .category(existingCategory)
                .build();
        return bookCategory.save(book);
    }

    @Override
    public Book updateBook(Long id, BookDTO bookDTO) {
        Book bookUpdate = getBookById(id);

        if (bookUpdate != null) {
            Category existingCategory = categoryRepository.
                    findById(bookDTO.getCategory_id())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found with id " + bookDTO.getCategory_id()));

            bookUpdate.setName(bookDTO.getName());
            bookUpdate.setImagePath(bookDTO.getImagePath());
            bookUpdate.setAuthor(bookDTO.getAuthor());
            bookUpdate.setPublisher(bookDTO.getPublisher());
            bookUpdate.setPublishedDate(bookDTO.getPublishedDate());
            bookUpdate.setPages(bookDTO.getPages());
            bookUpdate.setLanguage(bookDTO.getLanguage());
            bookUpdate.setPrice(bookDTO.getPrice());
            bookUpdate.setDescription(bookDTO.getDescription());
            return bookCategory.save(bookUpdate);
        }
        return null;
    }

    @Override
    public void deleteBook(Long id) {
        Book bookDelete = getBookById(id);
        bookCategory.delete(bookDelete);
    }

    @Override
    public BookImage saveBookImage(Long bookId, BookImageDTO bookImageDTO) {
        Book book = getBookById(bookId);
        BookImage bookImage = BookImage.builder()
                .book(book)
                .imagePath(bookImageDTO.getImagePath())
                .build();
        int size = bookImageRepository.findByBookId(bookId).size();
        if(size >= 4){
            throw new InvalidParameterException("Mỗi sản phẩm sách chỉ tối đa 4 hình");
        }
        return bookImageRepository.save(bookImage);
    }

    @Override
    public List<BookImage> getAllBookImages(Long bookId) {
        return bookImageRepository.findByBookId(bookId);
    }
}
