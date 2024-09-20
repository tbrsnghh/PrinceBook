package com.example.backend.dtos;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookImageDTO {
    @JsonProperty("image_path")
    private String imagePath;

    @JsonProperty("book_id")
    @Min(value=1, message="Id của book phải lớn hơn 0")
    private Long bookId;
}
