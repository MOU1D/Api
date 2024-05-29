package com.example.ApiRest.Service.ServiceProduct;

import com.example.ApiRest.Model.CommandItem;
import com.example.ApiRest.Model.Product;

public interface deleteProduct {
    Product deleteExistingProduct(Long productId);
}
