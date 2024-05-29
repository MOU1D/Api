package com.example.ApiRest.Repository;

import com.example.ApiRest.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
