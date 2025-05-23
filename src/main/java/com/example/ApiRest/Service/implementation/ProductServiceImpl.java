package com.example.ApiRest.Service.implementation;

import com.example.ApiRest.Model.Product;
import com.example.ApiRest.Model.ProductStatus;
import com.example.ApiRest.Repository.ProductRepository;
import com.example.ApiRest.Service.ProductService;
import com.example.ApiRest.dto.ProductDTO;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<ProductDTO> getAllProducts() {
        return productRepository.findAll().stream()
                .filter(product -> product.getStatus() != ProductStatus.DELETED)
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ProductDTO getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found"));
        if (product.getStatus() == ProductStatus.DELETED) {
            throw new EntityNotFoundException("Product not found");
        }
        return convertToDTO(product);
    }

    @Override
    public ProductDTO saveProduct(ProductDTO productDTO) {
        Product product = convertToEntity(productDTO);
        product = productRepository.save(product);
        return convertToDTO(product);
    }

    @Override
    public void deleteProduct(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Product not found"));
        product.setStatus(ProductStatus.DELETED);
        productRepository.save(product);
    }

    @Override
    public List<ProductDTO> getProductsByStatus(String status) {
        ProductStatus productStatus = ProductStatus.valueOf(status.toUpperCase());
        return productRepository.findByStatus(productStatus).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    private ProductDTO convertToDTO(Product product) {
        ProductDTO dto = new ProductDTO();
        dto.setId(product.getId());
        dto.setNameOfProduct(product.getNameOfProduct());
        dto.setPriceOfProduct(product.getPriceOfProduct());
        dto.setDescriptionOfProduct(product.getDescriptionOfProduct());
        dto.setQuantity(product.getQuantity());
        dto.setImageUrl(product.getImageUrl());
        dto.setStatus(product.getStatus());
        return dto;
    }

    private Product convertToEntity(ProductDTO dto) {
        Product product = new Product();
        product.setId(dto.getId());
        product.setNameOfProduct(dto.getNameOfProduct());
        product.setPriceOfProduct(dto.getPriceOfProduct());
        product.setDescriptionOfProduct(dto.getDescriptionOfProduct());
        product.setQuantity(dto.getQuantity());
        product.setImageUrl(dto.getImageUrl());
        product.setStatus(dto.getStatus());
        return product;
    }
}
