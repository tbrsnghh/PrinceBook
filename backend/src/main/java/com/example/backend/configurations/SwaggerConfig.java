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

    // http://localhost:8080/swagger-ui/index.html
}
