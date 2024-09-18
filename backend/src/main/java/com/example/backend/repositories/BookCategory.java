package com.example.backend.repositories;

import com.example.backend.models.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookCategory extends JpaRepository<Book, Long> {
}
