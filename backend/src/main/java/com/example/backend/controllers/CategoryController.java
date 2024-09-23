package com.example.backend.controllers;

import com.example.backend.dtos.CategoryDTO;
import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.models.Category;
import com.example.backend.responses.ApiResponse;
import com.example.backend.responses.CategoryListResponse;
import com.example.backend.responses.CategoryResponse;
import com.example.backend.services.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/category")
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/list")
    public ResponseEntity<ApiResponse> getAllCategoriesPaginated(@RequestParam(defaultValue = "0") int page,
                                                                          @RequestParam(defaultValue = "5") int size) {
        PageRequest pageRequest = PageRequest.of(page, size,
                Sort.by("createdAt").descending());
        Page<CategoryResponse> categoryResponsePage = categoryService.getAllCategoriesPaginated(pageRequest);
        int totalPages = categoryResponsePage.getTotalPages();
        List<CategoryResponse> categoryResponses = categoryResponsePage.getContent();
        CategoryListResponse categoryListResponse = CategoryListResponse.builder()
                .categoryResponses(categoryResponses)
                .totalPages(totalPages)
                .build();

        ApiResponse apiResponse = ApiResponse.builder()
                .data(categoryListResponse)
                .message("Show all categories successfully")
                .status(HttpStatus.OK.value())
                .build();

        return ResponseEntity.ok().body(apiResponse);
    }

    @GetMapping("")
    public ResponseEntity<ApiResponse> getAllCategory(){
        ApiResponse apiResponse = ApiResponse.builder()
                .data(categoryService.getAllCategories())
                .message("Success")
                .status(HttpStatus.OK.value())
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }

    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable Long id) {
        return categoryService.getCategoryById(id);
    }

    @PostMapping("")
    public ResponseEntity<ApiResponse> addCategory(@Valid @RequestBody CategoryDTO categoryDTO, BindingResult result) {
        if (result.hasErrors()){
            List<String> errors = result.getFieldErrors().stream()
                    .map(FieldError::getDefaultMessage).toList();
            ApiResponse apiResponse = ApiResponse.builder()
                    .data(errors)
                    .message("Validation failed")
                    .status(HttpStatus.BAD_REQUEST.value())
                    .build();
            return ResponseEntity.badRequest().body(apiResponse);
        }

        Category newCategory = categoryService.saveCategory(categoryDTO);
        ApiResponse apiResponse = ApiResponse.builder()
                .data(newCategory)
                .message("Insert Successfully")
                .status(HttpStatus.CREATED.value())
                .build();
        return ResponseEntity.ok(apiResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateCategory(@Valid @PathVariable Long id, @RequestBody CategoryDTO categoryDTO, BindingResult result) {
        if (result.hasErrors()){
            List<String> errors = result.getFieldErrors().stream()
                    .map(FieldError::getDefaultMessage).toList();
            ApiResponse apiResponse = ApiResponse.builder()
                    .data(errors)
                    .message("Validation failed")
                    .status(HttpStatus.BAD_REQUEST.value())
                    .build();
            return ResponseEntity.badRequest().body(apiResponse);
        }

        Category categoryUpdate = categoryService.updateCategory(id, categoryDTO);
        if (categoryUpdate == null) {
            throw new ResourceNotFoundException("Khong tim thay category voi id: " +id);
        }

        ApiResponse apiResponse = ApiResponse.builder()
                .data(categoryUpdate)
                .message("Update Successfully")
                .status(HttpStatus.OK.value())
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteCategory(@PathVariable Long id) {
        Category category = categoryService.getCategoryById(id);

        if (category == null) {
            throw new ResourceNotFoundException("Khong tim thay category voi id: " +id);
        }
        categoryService.deleteCategory(id);
        ApiResponse apiResponse = ApiResponse.builder()
                .data(id)
                .message("Delete Successfully")
                .status(HttpStatus.OK.value())
                .build();
        return ResponseEntity.ok().body(apiResponse);
    }
}
