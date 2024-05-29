package com.example.ApiRest.Service.implementation;

import com.example.ApiRest.Model.Product;
import com.example.ApiRest.Repository.ProductRepository;
import com.example.ApiRest.Service.ServiceProduct.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Product createNewProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product deleteExistingProduct(Long productId) {
        productRepository.deleteById(productId);
        return null;
    }

    @Override
    public Product updateExistingProduct(Long id, Product product) {
        Product existingProduct = productRepository.findById(product.getId()).get();
        existingProduct.setNameOfProduct(product.getNameOfProduct());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setPriceOfProduct(product.getPriceOfProduct());
        existingProduct.setProductStatus(product.getProductStatus());
        existingProduct.setCommand(product.getCommand());
        return existingProduct;
    }
}
