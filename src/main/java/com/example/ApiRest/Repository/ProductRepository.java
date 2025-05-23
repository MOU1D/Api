package com.example.ApiRest.Repository;

import com.example.ApiRest.Model.Product;
import com.example.ApiRest.Model.ProductStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByStatus(ProductStatus status);
}
