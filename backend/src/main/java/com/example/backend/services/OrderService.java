package com.example.backend.services;

import com.example.backend.dtos.OrderDTO;
import com.example.backend.models.Order;
import com.example.backend.repositories.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService implements IOrderService{
    private final OrderRepository orderRepository;

    @Override
    public Order saveOrder(OrderDTO orderDTO) {
        return null;
    }

    @Override
    public Order getOrderById(Long id) {
        return null;
    }

    @Override
    public Order updateOrder(Long id, OrderDTO orderDTO) {
        return null;
    }

    @Override
    public void deleteOrder(Long id) {

    }

    @Override
    public List<Order> findByUserId(Long userId) {
        return List.of();
    }
}
