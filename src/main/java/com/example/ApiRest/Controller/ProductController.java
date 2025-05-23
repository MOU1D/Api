package com.example.ApiRest.Controller;

import com.example.ApiRest.Service.ProductService;
import com.example.ApiRest.dto.ProductDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/products")
@Tag(name = "Product", description = "Product management APIs")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @Operation(summary = "Get all products")
    @GetMapping
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @Operation(summary = "Get a product by ID")
    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProduct(@PathVariable Long id) {
        ProductDTO product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @Operation(summary = "Get products by status")
    @GetMapping("/status/{status}")
    public ResponseEntity<List<ProductDTO>> getProductsByStatus(@PathVariable String status) {
        return ResponseEntity.ok(productService.getProductsByStatus(status));
    }

    @Operation(summary = "Create a new product")
    @PostMapping
    public ResponseEntity<ProductDTO> createProduct(
            @Parameter(description = "Product to create", required = true) @Valid @RequestBody ProductDTO productDTO) {
        ProductDTO savedProduct = productService.saveProduct(productDTO);
        return ResponseEntity.ok(savedProduct);
    }

    @Operation(summary = "Update an existing product")
    @PutMapping("/{id}")
    public ResponseEntity<ProductDTO> updateProduct(
            @Parameter(description = "Product ID", required = true) @PathVariable Long id,
            @Parameter(description = "Updated product details", required = true) @Valid @RequestBody ProductDTO productDTO) {
        productDTO.setId(id);
        ProductDTO updatedProduct = productService.saveProduct(productDTO);
        return ResponseEntity.ok(updatedProduct);
    }

    @Operation(summary = "Delete a product")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(
            @Parameter(description = "Product ID", required = true) @PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }
}
