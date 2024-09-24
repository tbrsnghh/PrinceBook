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


}
