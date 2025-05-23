package com.example.ApiRest.Controller;

import com.example.ApiRest.Service.FavoriteService;
import com.example.ApiRest.dto.FavoriteDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/favorites")
@Tag(name = "Favorites", description = "Favorites/Wishlist management APIs")
@CrossOrigin(origins = "http://localhost:3000")
public class FavoriteController {

    private final FavoriteService favoriteService;

    @Autowired
    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }

    @Operation(summary = "Get client's favorite products")
    @GetMapping("/{clientId}")
    public ResponseEntity<List<FavoriteDTO>> getFavorites(
            @Parameter(description = "Client ID", required = true) @PathVariable Long clientId) {
        return ResponseEntity.ok(favoriteService.getFavorites(clientId));
    }

    @Operation(summary = "Add product to favorites")
    @PostMapping
    public ResponseEntity<FavoriteDTO> addFavorite(
            @Parameter(description = "Favorite details", required = true) @Valid @RequestBody FavoriteDTO favoriteDTO) {
        return ResponseEntity.ok(favoriteService.addFavorite(favoriteDTO));
    }

    @Operation(summary = "Remove product from favorites")
    @DeleteMapping("/{clientId}/{productId}")
    public ResponseEntity<Void> removeFavorite(
            @Parameter(description = "Client ID", required = true) @PathVariable Long clientId,
            @Parameter(description = "Product ID", required = true) @PathVariable Long productId) {
        favoriteService.removeFavorite(clientId, productId);
        return ResponseEntity.ok().build();
    }
}