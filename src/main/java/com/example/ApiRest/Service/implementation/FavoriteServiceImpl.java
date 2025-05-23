package com.example.ApiRest.Service.implementation;

import com.example.ApiRest.Model.Client;
import com.example.ApiRest.Model.Favorite;
import com.example.ApiRest.Model.Product;
import com.example.ApiRest.Repository.ClientRepository;
import com.example.ApiRest.Repository.FavoriteRepository;
import com.example.ApiRest.Repository.ProductRepository;
import com.example.ApiRest.Service.FavoriteService;
import com.example.ApiRest.dto.FavoriteDTO;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class FavoriteServiceImpl implements FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<FavoriteDTO> getFavorites(Long clientId) {
        return favoriteRepository.findByClientId(clientId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public FavoriteDTO addFavorite(FavoriteDTO favoriteDTO) {
        Client client = clientRepository.findById(favoriteDTO.getClientId())
                .orElseThrow(() -> new EntityNotFoundException("Client not found"));

        Product product = productRepository.findById(favoriteDTO.getProductId())
                .orElseThrow(() -> new EntityNotFoundException("Product not found"));

        // Check if already exists
        if (favoriteRepository.findByClientIdAndProductId(client.getId(), product.getId()).isPresent()) {
            throw new IllegalStateException("Product is already in favorites");
        }

        Favorite favorite = new Favorite();
        favorite.setClient(client);
        favorite.setProduct(product);

        favorite = favoriteRepository.save(favorite);
        return convertToDTO(favorite);
    }

    @Override
    public void removeFavorite(Long clientId, Long productId) {
        Favorite favorite = favoriteRepository.findByClientIdAndProductId(clientId, productId)
                .orElseThrow(() -> new EntityNotFoundException("Favorite not found"));
        favoriteRepository.delete(favorite);
    }

    private FavoriteDTO convertToDTO(Favorite favorite) {
        FavoriteDTO dto = new FavoriteDTO();
        dto.setId(favorite.getId());
        dto.setClientId(favorite.getClient().getId());
        dto.setProductId(favorite.getProduct().getId());
        dto.setProductName(favorite.getProduct().getNameOfProduct());
        dto.setProductPrice(favorite.getProduct().getPriceOfProduct());
        dto.setProductDescription(favorite.getProduct().getDescriptionOfProduct());
        return dto;
    }
}