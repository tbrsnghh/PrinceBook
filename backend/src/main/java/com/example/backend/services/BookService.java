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
import com.example.backend.responses.BookResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.security.InvalidParameterException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookService implements IBookService {
    private final BookRepository bookRepository;
    private final CategoryRepository categoryRepository;
    private final BookImageRepository bookImageRepository;


    @Override
    public Page<BookResponse> getAllBookPaginated(PageRequest pageRequest) {
        return bookRepository.findAll(pageRequest).map(book -> {
            return BookResponse.fromBook(book);
        });
    }

    @Override
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Book getBookById(Long id) {
        return bookRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Book not found with id " + id));
    }

    @Override
    public Book saveBook(BookDTO bookDTO) {
        // Kiểm tra xem category_id đã tồn tại hay chưa
        Category existingCategory = categoryRepository.
                findById(bookDTO.getCategoryId())
                .orElseThrow(()-> new ResourceNotFoundException("Category not found with id " + bookDTO.getCategoryId()));

        Book book = Book.builder()
                .name(bookDTO.getName())
                .author(bookDTO.getAuthor())
                .publisher(bookDTO.getPublisher())
                .publishedDate(bookDTO.getPublishedDate())
                .pages(bookDTO.getPages())
                .language(bookDTO.getLanguage())
                .price(bookDTO.getPrice())
                .description(bookDTO.getDescription())
                .category(existingCategory)
                .build();
        return bookRepository.save(book);
    }

    @Override
    public Book updateBook(Long id, BookDTO bookDTO) {
        Book bookUpdate = getBookById(id);

        if (bookUpdate != null) {
            Category existingCategory = categoryRepository.
                    findById(bookDTO.getCategoryId())
                    .orElseThrow(() -> new ResourceNotFoundException("Category not found with id " + bookDTO.getCategoryId()));

            bookUpdate.setName(bookDTO.getName());
            bookUpdate.setAuthor(bookDTO.getAuthor());
            bookUpdate.setPublisher(bookDTO.getPublisher());
            bookUpdate.setPublishedDate(bookDTO.getPublishedDate());
            bookUpdate.setPages(bookDTO.getPages());
            bookUpdate.setLanguage(bookDTO.getLanguage());
            bookUpdate.setPrice(bookDTO.getPrice());
            bookUpdate.setDescription(bookDTO.getDescription());
            return bookRepository.save(bookUpdate);
        }
        return null;
    }

    @Override
    public void deleteBook(Long id) {
        Book bookDelete = getBookById(id);
        bookRepository.delete(bookDelete);
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

    @Override
    public BookImage getBookImageById(Long bookImageId) {
        return bookImageRepository.findById(bookImageId).orElse(null);
    }

    @Override
    public void deleteBookImageById(Long bookImageId) {
        bookImageRepository.deleteById(bookImageId);
    }

    public void insertBooks (List<BookDTO> bookDTOs) {
        List<Book> books = bookDTOs.stream()
                .map(this::convertToEntity)
                .collect(Collectors.toList());
        bookRepository.saveAll(books);
    }
    private Book convertToEntity(BookDTO bookDTO) {
        return Book.builder()
                .name(bookDTO.getName())
                .author(bookDTO.getAuthor())
                .publisher(bookDTO.getPublisher())
                .publishedDate(bookDTO.getPublishedDate())
                .pages(bookDTO.getPages())
                .language(bookDTO.getLanguage())
                .price(bookDTO.getPrice())
                .description(bookDTO.getDescription())
                .category(categoryRepository.findById(bookDTO.getCategoryId()).orElse(null))
                .build();
    }

    @Override
    public Long countAllBook() {
        return bookRepository.countAllBook();
    }

    @Override
    public List<Book> searchBooksByName(String bookName) {
        if (bookName == null || bookName.trim().isEmpty()) {
            return List.of();
        }
        return bookRepository.findBooksByName(bookName);
    }

    @Override
    public List<Book> findBooksByCategoryName(String categoryName) {
        if (categoryName == null || categoryName.trim().isEmpty()) {
            return List.of();
        }
        return bookRepository.findBooksByCategoryName(categoryName);
    }
}
