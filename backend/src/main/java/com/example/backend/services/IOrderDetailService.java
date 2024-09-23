package com.example.backend.services;

import com.example.backend.dtos.OrderDTO;
import com.example.backend.dtos.OrderDetailDTO;
import com.example.backend.models.Order;
import com.example.backend.models.OrderDetail;

import java.util.List;

public interface IOrderDetailService {
    OrderDetail saveOrderDetail(OrderDetailDTO orderDetailDTO);
    OrderDetail getOrderDetailById(Long id);
    OrderDetail updateOrderDetail(Long id, OrderDetailDTO orderDetailDTO);
    void deleteOrder(Long id);
    List<OrderDetail> findByOrderId(Long orderId);
}
