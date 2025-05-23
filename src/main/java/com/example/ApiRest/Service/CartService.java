package com.example.ApiRest.Service;

import com.example.ApiRest.dto.CartDTO;
import com.example.ApiRest.dto.CartItemDTO;

public interface CartService {
    CartDTO getCart(Long clientId);

    CartDTO addToCart(Long clientId, CartItemDTO cartItemDTO);

    CartDTO removeFromCart(Long clientId, Long productId);

    void clearCart(Long clientId);

    Long checkoutCart(Long clientId);
}