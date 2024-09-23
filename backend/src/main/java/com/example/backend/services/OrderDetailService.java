package com.example.backend.services;

import com.example.backend.dtos.OrderDetailDTO;
import com.example.backend.models.OrderDetail;
import com.example.backend.repositories.OrderDetailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderDetailService implements IOrderDetailService{
    private final OrderDetailRepository orderDetailRepository;

    @Override
    public OrderDetail saveOrderDetail(OrderDetailDTO orderDetailDTO) {
        return null;
    }

    @Override
    public OrderDetail getOrderDetailById(Long id) {
        return null;
    }

    @Override
    public OrderDetail updateOrderDetail(Long id, OrderDetailDTO orderDetailDTO) {
        return null;
    }

    @Override
    public void deleteOrder(Long id) {

    }

    @Override
    public List<OrderDetail> findByOrderId(Long orderId) {
        return List.of();
    }
}
