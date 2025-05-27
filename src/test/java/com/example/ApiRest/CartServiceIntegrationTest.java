package com.example.ApiRest;

import com.example.ApiRest.Model.Client;
import com.example.ApiRest.Model.Product;
import com.example.ApiRest.Model.ProductStatus;
import com.example.ApiRest.Repository.ClientRepository;
import com.example.ApiRest.Repository.ProductRepository;
import com.example.ApiRest.Service.CartService;
import com.example.ApiRest.dto.CartDTO;
import com.example.ApiRest.dto.CartItemDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
public class CartServiceIntegrationTest {

    @Autowired
    private CartService cartService;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ProductRepository productRepository;

    private Client testClient;
    private Product testProduct;

    @BeforeEach
    void setUp() {
        // Create test client
        testClient = new Client();
        testClient.setFirstName("Test");
        testClient.setSecondName("User");
        testClient.setEmail("test@example.com");
        testClient.setDateOfBirth(new Date());
        testClient = clientRepository.save(testClient);

        // Create test product
        testProduct = new Product();
        testProduct.setNameOfProduct("Test Product");
        testProduct.setPriceOfProduct(99.99);
        testProduct.setStatus(ProductStatus.IN_STOCK);
        testProduct = productRepository.save(testProduct);
    }

    @Test
    void testAddToCart() {
        // Create cart item
        CartItemDTO cartItemDTO = new CartItemDTO();
        cartItemDTO.setProductId(testProduct.getId());
        cartItemDTO.setQuantity(2);

        // Add to cart
        CartDTO cartDTO = cartService.addToCart(testClient.getId(), cartItemDTO);

        // Verify
        assertNotNull(cartDTO);
        assertEquals(1, cartDTO.getItems().size());
        assertEquals(testProduct.getId(), cartDTO.getItems().get(0).getProductId());
        assertEquals(2, cartDTO.getItems().get(0).getQuantity());
        assertEquals(99.99 * 2, cartDTO.getTotalAmount());
    }

    @Test
    void testCheckoutCart() {
        // Add item to cart
        CartItemDTO cartItemDTO = new CartItemDTO();
        cartItemDTO.setProductId(testProduct.getId());
        cartItemDTO.setQuantity(1);
        cartService.addToCart(testClient.getId(), cartItemDTO);

        // Checkout
        Long orderId = cartService.checkoutCart(testClient.getId());

        // Verify
        assertNotNull(orderId);

        // Verify cart is empty after checkout
        CartDTO cartDTO = cartService.getCart(testClient.getId());
        assertTrue(cartDTO.getItems().isEmpty());
    }
}