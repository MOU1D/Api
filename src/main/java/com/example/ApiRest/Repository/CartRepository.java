package com.example.ApiRest.Repository;

import com.example.ApiRest.Model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Long> {
    Optional<Cart> findByClientId(Long clientId);
}