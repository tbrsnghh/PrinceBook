package com.example.backend.repositories;

import com.example.backend.models.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    Page<Book> findAll(Pageable pageable);

    @Query("SELECT count(b) as total_books FROM Book b")
    Long countAllBook();

    // tìm sách theo tên
    @Query("SELECT b FROM Book b WHERE LOWER(b.name) LIKE LOWER(CONCAT('%', :bookName, '%'))")
    List<Book> findBooksByName(@Param("bookName") String bookName);

    // tìm sách theo category
    @Query("SELECT b FROM Book b JOIN b.category c WHERE LOWER(c.name) LIKE LOWER(CONCAT('%', :categoryName, '%'))")
    List<Book> findBooksByCategoryName(@Param("categoryName") String categoryName);
}
