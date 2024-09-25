package com.example.backend.controllers;

import ch.qos.logback.core.util.StringUtil;
import com.example.backend.dtos.BookDTO;
import com.example.backend.dtos.BookImageDTO;
import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.models.Book;
import com.example.backend.models.BookImage;
import com.example.backend.responses.*;
import com.example.backend.services.BookService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/book")
@RequiredArgsConstructor
public class BookController {
    private final BookService bookService;

    @Autowired
    private ObjectMapper objectMapper;

    @PostMapping("/bulk")
    public ResponseEntity<?> addJsonBooks(@RequestBody String jsonData) {
        try {
            List<BookDTO> bookDTOList = objectMapper.readValue(jsonData, new TypeReference<>() {});
            bookService.insertBooks(bookDTOList);
            return ResponseEntity.status(HttpStatus.CREATED).body("Books added successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error processing json data: " + e.getMessage());
        }
    }

    @GetMapping("/list")
    public ResponseEntity<ApiResponse> getAllBooksPaginated(@RequestParam(defaultValue = "0") int page,
                                                                 @RequestParam(defaultValue = "5") int size) {
        PageRequest pageRequest = PageRequest.of(page, size,
                Sort.by("createdAt").descending());
        Page<BookResponse> bookResponsePage = bookService.getAllBookPaginated(pageRequest);
        int totalPages = bookResponsePage.getTotalPages();
        List<BookResponse> bookResponses = bookResponsePage.getContent();
        BookListResponse bookListResponse = BookListResponse.builder()
                .bookResponses(bookResponses)
                .totalPages(totalPages)
                .build();

        ApiResponse apiResponse = ApiResponse.builder()
                .data(bookListResponse)
                .message("Show all books successfully")
                .status(HttpStatus.OK.value())
                .build();

        return ResponseEntity.ok().body(apiResponse);
    }

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
        bookService.deleteBook(id);
        ApiResponse apiResponse = ApiResponse.builder()
                .data(id)
                .message("Delete successfully")
                .status(HttpStatus.OK.value())
                .build();

        return ResponseEntity.ok().body(apiResponse);
    }

    @GetMapping("/getAllImage/{id}")
    public ResponseEntity<ApiResponse> getAllImage(@PathVariable Long id) {
        ApiResponse apiResponse = ApiResponse.builder()
                .data(bookService.getAllBookImages(id))
                .status(HttpStatus.OK.value())
                .message("Get image successfully!")
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }

    @PostMapping(value = "/uploads/{id}")
    public ResponseEntity<ApiResponse> uploadImage(@PathVariable Long id,
                                                   @ModelAttribute("files") List<MultipartFile> files) throws IOException {
        List<BookImage> bookImageList = new ArrayList<>();
        int count = 0;
        for(MultipartFile file : files) {
            if (file != null) {
                if(file.getSize() == 0){
                    count++;
                    continue;
                }
                String fileName = storeFile(file);
                BookImageDTO bookImageDTO = BookImageDTO.builder()
                        .imagePath(fileName)
                        .build();
                BookImage bookImage = bookService.saveBookImage(id, bookImageDTO);
                if (bookImage.getBook() == null){
                    throw new ResourceNotFoundException("Khong tim thay san pham sach voi id " + id);
                }
                bookImageList.add(bookImage);
            }
        }
        
        if (count == 1) {
            throw new IllegalArgumentException("Files chưa chọn!");
        }

        ApiResponse apiResponse = ApiResponse.builder()
                .data(bookImageList)
                .status(HttpStatus.OK.value())
                .message("Upload successfully")
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }

    private String storeFile(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        String uniqueFileName = UUID.randomUUID().toString() + "_" + fileName;
        java.nio.file.Path uploadDir = Paths.get("upload");
        if (!Files.exists(uploadDir)){
            Files.createDirectory(uploadDir);
        }
        java.nio.file.Path destination = Paths.get(uploadDir.toString(), uniqueFileName);
        Files.copy(file.getInputStream(), destination, StandardCopyOption.REPLACE_EXISTING);
        return uniqueFileName;
    }

    @GetMapping("/images/{imageName}")
    public ResponseEntity<?> viewImage(@PathVariable String imageName) {
        try {
            java.nio.file.Path imagePath = Paths.get("upload/" + imageName);
            UrlResource resource = new UrlResource(imagePath.toUri());

            if (resource.exists()) {
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_JPEG)
                        .body(resource);
            } else {
                // logger.info(imageName + " not found");
                return ResponseEntity.ok()
                        .contentType(MediaType.IMAGE_JPEG)
                        .body(new UrlResource(Paths.get("uploads/notfound.jpeg").toUri()));
            }
        } catch (Exception e) {
            // logger.error("Error occurred while retrieving image: " + e.getMessage());
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/deleteImage/{id}")
    public ResponseEntity<ApiResponse> deleteImage(@PathVariable Long id) {
        BookImage bookImage = bookService.getBookImageById(id);

        if(bookImage == null) {
            throw new ResourceNotFoundException("Book image not found id:" + id);
        }
        bookService.deleteBookImageById(id);
        ApiResponse apiResponse = ApiResponse.builder()
                .status(HttpStatus.OK.value())
                .message("Xóa thành công " + id)
                .data(bookImage).build();

        return ResponseEntity.ok(apiResponse);
    }

    @GetMapping("/countBooks")
    public ResponseEntity<ApiResponse> countBooks() {
        Long countOfBooks = bookService.countAllBook();
        // kiểm tra nếu không có quyển sách nào
        if (countOfBooks == 0) {
            return ResponseEntity.ok(ApiResponse.builder()
                    .data(countOfBooks)
                    .message("Khong co quyen sach nao!")
                    .status(HttpStatus.OK.value())
                    .build());
        }
        ApiResponse apiResponse = ApiResponse.builder()
                .data(countOfBooks)
                .message("Count of book retrieved successfully!")
                .status(HttpStatus.OK.value())
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }

    // Tìm sách theo tên
    @GetMapping("/searchBooks")
    public ResponseEntity<ApiResponse> searchBooksByName(@RequestParam String bookName){
        List<Book> bookList = bookService.searchBooksByName(bookName);
        if (bookList.isEmpty()) {
            ApiResponse apiResponse = ApiResponse.builder()
                    .message("Khong co quyen sach nao voi ten: " + bookName)
                    .status(HttpStatus.NOT_FOUND.value())
                    .build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(apiResponse);
        }

        ApiResponse apiResponse = ApiResponse.builder()
                .data(bookList)
                .message("Da tim thay sach!")
                .status(HttpStatus.OK.value())
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }

    // Tìm danh sách quyển sách theo category
    @GetMapping("/searchBooks/category")
    public ResponseEntity<ApiResponse> searchBooksByCategoryName(@RequestParam String categoryName){
        List<Book> bookListWithCategory = bookService.findBooksByCategoryName(categoryName);
        if (bookListWithCategory.isEmpty()) {
            ApiResponse apiResponse = ApiResponse.builder()
                    .message("Khong co quyen sach nao voi category: " + categoryName)
                    .status(HttpStatus.NOT_FOUND.value())
                    .build();
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(apiResponse);
        }

        ApiResponse apiResponse = ApiResponse.builder()
                .data(bookListWithCategory)
                .message("Da tim thay sach!")
                .status(HttpStatus.OK.value())
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }
}
