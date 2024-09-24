 package com.example.backend.services;

 import com.example.backend.dtos.OrderDetailDTO;
 import com.example.backend.exceptions.ResourceNotFoundException;
 import com.example.backend.models.Book;
 import com.example.backend.models.Order;
 import com.example.backend.models.OrderDetail;
 import com.example.backend.repositories.BookRepository;
 import com.example.backend.repositories.OrderDetailRepository;
 import com.example.backend.repositories.OrderRepository;
 import lombok.RequiredArgsConstructor;
 import org.springframework.stereotype.Service;

 import java.util.List;

 @Service
 @RequiredArgsConstructor
 public class OrderDetailService implements IOrderDetailService{
     private final OrderDetailRepository orderDetailRepository;
     private final OrderRepository orderRepository;
     private final BookRepository bookRepository;

     @Override
     public List<OrderDetail> getAllOrderDetail() {
         return orderDetailRepository.findAll();
     }

     @Override
     public OrderDetail saveOrderDetail(OrderDetailDTO orderDetailDTO) {
         Order orderExist = orderRepository.findById(orderDetailDTO.getOrderId()).orElse(null);
         Book bookExist = bookRepository.findById(orderDetailDTO.getBookId()).orElse(null);
         OrderDetail orderDetail = OrderDetail.builder()
                 .order(orderExist)
                 .book(bookExist)
                 .count(orderDetailDTO.getCount())
                 .totalPrice(orderDetailDTO.getTotalPrice())
                 .build();
         return orderDetailRepository.save(orderDetail);
     }

     @Override
     public OrderDetail getOrderDetailById(Long id) {
         return orderDetailRepository.findById(id)
                 .orElseThrow(() -> new ResourceNotFoundException("Order detail not found with id "+id));
     }

     @Override
     public OrderDetail updateOrderDetail(Long id, OrderDetailDTO orderDetailDTO) {
         return null;
     }

     @Override
     public void deleteOrderById(Long id) {
        orderDetailRepository.deleteById(id);
     }

     @Override
     public List<OrderDetail> findByOrderId(Long orderId) {
         return orderDetailRepository.findByOrderId(orderId);
     }
 }
