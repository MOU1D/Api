package com.example.ApiRest.Service.ServiceProduct;

import com.example.ApiRest.Model.Product;

import java.util.List;

public interface getProduct {
    List<Product> getAllProducts();
    Product getProductById(Long id);
}
