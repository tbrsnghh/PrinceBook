package com.example.backend.services;

import com.example.backend.dtos.CategoryDTO;
import com.example.backend.models.Category;
import com.example.backend.responses.CategoryResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface ICategoryService {
    Page<CategoryResponse> getAllCategoriesPaginated(PageRequest pageRequest);
    List<Category> getAllCategories();
    Category getCategoryById(Long id);
    Category saveCategory(CategoryDTO categoryDTO);
    Category updateCategory(Long id, CategoryDTO categoryDTO);
    void deleteCategory(Long id);
}
