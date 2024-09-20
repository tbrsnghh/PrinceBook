package com.example.backend.services;

import com.example.backend.dtos.CategoryDTO;
import com.example.backend.models.Category;
import com.example.backend.repositories.CategoryRepository;
import com.example.backend.responses.CategoryResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService implements ICategoryService {
    private final CategoryRepository categoryRepository;


    @Override
    public Page<CategoryResponse> getAllCategoriesPaginated(PageRequest pageRequest) {
        return categoryRepository.findAll(pageRequest).map(category -> {
            return CategoryResponse.fromCategory(category);
        });
    }

    @Override
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    @Override
    public Category getCategoryById(Long id) {
        return categoryRepository.findById(id).orElse(null);
    }

    @Override
    public Category saveCategory(CategoryDTO categoryDTO) {
        Category category = Category.builder()
                .name(categoryDTO.getName())
                .imagePath(categoryDTO.getImagePath())
                .build();
        return categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Long id, CategoryDTO categoryDTO) {
        Category categoryUpdate = getCategoryById(id);
        categoryUpdate.setName(categoryDTO.getName());
        categoryUpdate.setImagePath(categoryDTO.getImagePath());
        return categoryRepository.save(categoryUpdate);
    }

    @Override
    public void deleteCategory(Long id) {
        Category categoryDelete = getCategoryById(id);
        categoryRepository.delete(categoryDelete);
    }
}
