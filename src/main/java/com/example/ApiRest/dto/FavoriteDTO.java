package com.example.ApiRest.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class FavoriteDTO {
    private Long id;

    @NotNull(message = "Client ID is required")
    private Long clientId;

    @NotNull(message = "Product ID is required")
    private Long productId;

    // Additional product information for responses
    private String productName;
    private Double productPrice;
    private String productDescription;
}