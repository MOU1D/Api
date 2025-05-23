package com.example.ApiRest.Repository;

import com.example.ApiRest.Model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    List<Favorite> findByClientId(Long clientId);

    Optional<Favorite> findByClientIdAndProductId(Long clientId, Long productId);

    void deleteByClientIdAndProductId(Long clientId, Long productId);
}