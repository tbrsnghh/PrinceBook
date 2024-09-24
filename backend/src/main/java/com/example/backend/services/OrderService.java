
package com.example.backend.services;

import com.example.backend.dtos.OrderDTO;
import com.example.backend.models.Order;
import com.example.backend.repositories.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderService implements IOrderService{
    private final OrderRepository orderRepository;

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public Order saveOrder(OrderDTO orderDTO) {
        LocalDate shippingDate = orderDTO.getShippingDate() == null ? LocalDate.now() : orderDTO.getShippingDate();
        Order newOrder = Order.builder()
                .userName(orderDTO.getUserName())
                .email(orderDTO.getEmail())
                .phoneNumber(orderDTO.getPhoneNumber())
                .address(orderDTO.getAddress())
                .note(orderDTO.getNote())
                .status(orderDTO.getStatus())
                .totalPrice(orderDTO.getTotalPrice())
                .orderDate(new Date())
                .shippingMethod(orderDTO.getShippingMethod())
                .shippingAddress(orderDTO.getShippingAddress())
                .shippingDate(shippingDate)
                .paymentMethod(orderDTO.getPaymentMethod())
                .active(true)
                .build();
        return orderRepository.save(newOrder);
    }

    @Override
    public Order getOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }

    @Override
    public Order updateOrder(Long id, OrderDTO orderDTO) {
        return null;
    }

    @Override
    public void deleteOrder(Long id) {

    }

    @Override
    public List<Order> findByUserName(String userName) {
        return orderRepository.findByUserName(userName);
    }

    @Override
    public Long calculateOfOrder() {
        return orderRepository.calculateOfOrder();
    }

    @Override
    public Double calculateOfRevenue() {
        return orderRepository.calculateOfRevenue();
    }


}

