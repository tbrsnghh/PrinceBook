package com.example.backend.services;

import com.example.backend.dtos.CategoryDTO;
import com.example.backend.models.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> getAllCategories();
    Category getCategoryById(Long id);
    Category saveCategory(CategoryDTO categoryDTO);
    Category updateCategory(Long id, CategoryDTO categoryDTO);
    void deleteCategory(Long id);
}
