
package com.example.backend.services;

import com.example.backend.dtos.OrderDTO;
import com.example.backend.exceptions.ResourceNotFoundException;
import com.example.backend.models.Order;
import com.example.backend.repositories.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
        Order existingOrder = orderRepository.findById(id).orElse(null);
        if (existingOrder == null) {
            return null;
        }
        existingOrder.setUserName(orderDTO.getUserName());
        existingOrder.setEmail(orderDTO.getEmail());
        existingOrder.setPhoneNumber(orderDTO.getPhoneNumber());
        existingOrder.setAddress(orderDTO.getAddress());
        existingOrder.setNote(orderDTO.getNote());
        existingOrder.setStatus(orderDTO.getStatus());
        existingOrder.setTotalPrice(orderDTO.getTotalPrice());
        existingOrder.setShippingMethod(orderDTO.getShippingMethod());
        existingOrder.setShippingAddress(orderDTO.getShippingAddress());
        existingOrder.setShippingDate(orderDTO.getShippingDate() == null ? LocalDate.now() : orderDTO.getShippingDate());
        existingOrder.setPaymentMethod(orderDTO.getPaymentMethod());

        return orderRepository.save(existingOrder);
    }

    @Override
    public void deleteOrder(Long id) {
        if (orderRepository.existsById(id)) {
            orderRepository.deleteById(id);
        } else {
            throw new ResourceNotFoundException("Order with id " + id + " not found");
        }
    }

    @Override
    public List<Order> findByUserName(String userName) {
        return orderRepository.findByUserName(userName);
    }

    @Override
    public Order findLatestOrderByUserName(String userName) {
        Pageable pageable = PageRequest.of(0,1);
        List<Order> orders = orderRepository.findLatestOrderByUserName(userName, pageable);
        return orders.isEmpty() ? null : orders.get(0);
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

