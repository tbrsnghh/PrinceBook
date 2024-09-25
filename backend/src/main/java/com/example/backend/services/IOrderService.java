 package com.example.backend.services;

 import com.example.backend.dtos.OrderDTO;
 import com.example.backend.models.Order;

 import java.util.List;


public interface IOrderService {
    List<Order> getAllOrders();
    Order saveOrder(OrderDTO orderDTO);
    Order getOrderById(Long id);
    Order updateOrder(Long id, OrderDTO orderDTO);
    void deleteOrder(Long id);
    List<Order> findByUserName(String userName);

    Order findLatestOrderByUserName(String userName);
    Long calculateOfOrder();
    Double calculateOfRevenue();
}

