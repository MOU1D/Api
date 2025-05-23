package com.example.ApiRest.Controller;

import com.example.ApiRest.Service.CartService;
import com.example.ApiRest.dto.CartDTO;
import com.example.ApiRest.dto.CartItemDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/cart")
@Tag(name = "Shopping Cart", description = "Shopping cart management APIs")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @Operation(summary = "Get client's shopping cart")
    @GetMapping("/{clientId}")
    public ResponseEntity<CartDTO> getCart(
            @Parameter(description = "Client ID", required = true) @PathVariable Long clientId) {
        return ResponseEntity.ok(cartService.getCart(clientId));
    }

    @Operation(summary = "Add product to cart")
    @PostMapping("/{clientId}/add")
    public ResponseEntity<CartDTO> addToCart(
            @Parameter(description = "Client ID", required = true) @PathVariable Long clientId,
            @Parameter(description = "Cart item details", required = true) @Valid @RequestBody CartItemDTO cartItemDTO) {
        return ResponseEntity.ok(cartService.addToCart(clientId, cartItemDTO));
    }

    @Operation(summary = "Remove product from cart")
    @DeleteMapping("/{clientId}/remove/{productId}")
    public ResponseEntity<CartDTO> removeFromCart(
            @Parameter(description = "Client ID", required = true) @PathVariable Long clientId,
            @Parameter(description = "Product ID", required = true) @PathVariable Long productId) {
        return ResponseEntity.ok(cartService.removeFromCart(clientId, productId));
    }

    @Operation(summary = "Checkout cart")
    @PostMapping("/{clientId}/checkout")
    public ResponseEntity<Long> checkoutCart(
            @Parameter(description = "Client ID", required = true) @PathVariable Long clientId) {
        return ResponseEntity.ok(cartService.checkoutCart(clientId));
    }
}