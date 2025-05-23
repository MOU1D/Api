package com.example.ApiRest.Service;

import com.example.ApiRest.dto.FavoriteDTO;
import java.util.List;

public interface FavoriteService {
    List<FavoriteDTO> getFavorites(Long clientId);

    FavoriteDTO addFavorite(FavoriteDTO favoriteDTO);

    void removeFavorite(Long clientId, Long productId);
}