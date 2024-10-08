 package com.example.backend.repositories;

 import com.example.backend.models.Order;
 import org.springframework.data.domain.Pageable;
 import org.springframework.data.jpa.repository.JpaRepository;
 import org.springframework.stereotype.Repository;
 import org.springframework.data.jpa.repository.Query;

 import java.util.List;


@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUserName (String userName);

    // Tìm username và limit = 1
    @Query("SELECT o FROM Order o WHERE o.userName = :username ORDER BY o.createdAt DESC")
    List<Order> findLatestOrderByUserName(String username, Pageable pageable);

    // Tính số lượng đơn hàng
    @Query("SELECT count(o) as total_orders FROM Order o")
    Long calculateOfOrder();

    // Tính tổng doanh số
    @Query("SELECT sum(o.totalPrice) as total_revenue FROM Order o")
    Double calculateOfRevenue();


}

