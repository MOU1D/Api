package com.example.ApiRest.Service.ServiceProduct;

import com.example.ApiRest.Model.Product;

public interface updateProduct {
    Product updateExistingProduct(Long id, Product product);
}
