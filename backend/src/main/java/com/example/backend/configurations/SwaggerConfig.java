package com.example.backend.configurations;

import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public GroupedOpenApi groupedOpenApi_category() {
        return GroupedOpenApi.builder()
                .group("category-api")
                .pathsToMatch("/api/category/**")
                .build();
    }

    @Bean
    public GroupedOpenApi groupedOpenApi_book() {
        return GroupedOpenApi.builder()
                .group("book-api")
                .pathsToMatch("/api/book/**")
                .build();
    }

    @Bean
    public GroupedOpenApi groupedOpenApi_user() {
        return GroupedOpenApi.builder()
                .group("user-api")
                .pathsToMatch("/api/user/**")
                .build();
    }
    @Bean
    public GroupedOpenApi groupedOpenApi_order() {
        return GroupedOpenApi.builder()
                .group("order-auth")
                .pathsToMatch("/api/auth/**")
                .build();
    }
    @Bean
    public GroupedOpenApi groupedOpenApi_ordera() {
        return GroupedOpenApi.builder()
                .group("order-autha")
                .pathsToMatch("/api/order/**")
                .build();
    }
    @Bean
    public GroupedOpenApi groupedOpenApi_orderDetail() {
        return GroupedOpenApi.builder()
                .group("order-orderDetail")
                .pathsToMatch("/api/orderDetail/**")
                .build();
    }
}
