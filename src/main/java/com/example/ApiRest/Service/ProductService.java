package com.example.ApiRest.Service;

import com.example.ApiRest.dto.ProductDTO;
import java.util.List;

public interface ProductService {
    List<ProductDTO> getAllProducts();

    ProductDTO getProductById(Long id);

    ProductDTO saveProduct(ProductDTO productDTO);

    void deleteProduct(Long id);

    List<ProductDTO> getProductsByStatus(String status);
}