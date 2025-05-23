package com.example.ApiRest.Service.implementation;

import com.example.ApiRest.Model.*;
import com.example.ApiRest.Repository.*;
import com.example.ApiRest.Service.CartService;
import com.example.ApiRest.dto.CartDTO;
import com.example.ApiRest.dto.CartItemDTO;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
public class CartServiceImpl implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private CommandRepository commandRepository;

    @Override
    public CartDTO getCart(Long clientId) {
        Cart cart = cartRepository.findByClientId(clientId)
                .orElseGet(() -> createNewCart(clientId));
        return convertToDTO(cart);
    }

    @Override
    public CartDTO addToCart(Long clientId, CartItemDTO cartItemDTO) {
        Cart cart = cartRepository.findByClientId(clientId)
                .orElseGet(() -> createNewCart(clientId));

        Product product = productRepository.findById(cartItemDTO.getProductId())
                .orElseThrow(() -> new EntityNotFoundException("Product not found"));

        if (product.getStatus() != ProductStatus.IN_STOCK) {
            throw new IllegalStateException("Product is not in stock");
        }

        if (cartItemDTO.getQuantity() == null || cartItemDTO.getQuantity() < 1) {
            cartItemDTO.setQuantity(1);
        }

        if (product.getQuantity() < cartItemDTO.getQuantity()) {
            throw new IllegalStateException("Not enough product in stock. Available: " + product.getQuantity());
        }

        CartItem existingItem = cart.getItems().stream()
                .filter(item -> item.getProduct().getId().equals(cartItemDTO.getProductId()))
                .findFirst()
                .orElse(null);

        if (existingItem != null) {
            int newQuantity = existingItem.getQuantity() + cartItemDTO.getQuantity();
            if (product.getQuantity() < newQuantity) {
                throw new IllegalStateException("Not enough product in stock. Available: " + product.getQuantity());
            }
            existingItem.setQuantity(newQuantity);
        } else {
            CartItem newItem = new CartItem();
            newItem.setCart(cart);
            newItem.setProduct(product);
            newItem.setQuantity(cartItemDTO.getQuantity());
            cart.addItem(newItem);
        }

        cart = cartRepository.save(cart);
        return convertToDTO(cart);
    }

    @Override
    public CartDTO removeFromCart(Long clientId, Long productId) {
        Cart cart = cartRepository.findByClientId(clientId)
                .orElseThrow(() -> new EntityNotFoundException("Cart not found"));

        cart.getItems().removeIf(item -> item.getProduct().getId().equals(productId));
        cart = cartRepository.save(cart);

        return convertToDTO(cart);
    }

    @Override
    public void clearCart(Long clientId) {
        Cart cart = cartRepository.findByClientId(clientId)
                .orElseThrow(() -> new EntityNotFoundException("Cart not found"));
        cart.getItems().clear();
        cartRepository.save(cart);
    }

    @Override
    public Long checkoutCart(Long clientId) {
        Cart cart = cartRepository.findByClientId(clientId)
                .orElseThrow(() -> new EntityNotFoundException("Cart not found"));

        if (cart.getItems().isEmpty()) {
            throw new IllegalStateException("Cart is empty");
        }

        for (CartItem item : cart.getItems()) {
            Product product = item.getProduct();
            if (product.getStatus() != ProductStatus.IN_STOCK || product.getQuantity() < item.getQuantity()) {
                throw new IllegalStateException(
                        "Product " + product.getNameOfProduct() + " is not available in requested quantity");
            }
        }

        Command command = new Command();
        command.setClient(cart.getClient());
        command.setStatus(CommandStatus.IN_STOCK);
        command.setDateCreation(new Date());

        Set<CommandItem> commandItems = cart.getItems().stream()
                .map(cartItem -> {
                    Product product = cartItem.getProduct();
                    int newQuantity = product.getQuantity() - cartItem.getQuantity();
                    product.setQuantity(newQuantity);
                    if (newQuantity == 0) {
                        product.setStatus(ProductStatus.OUT_OF_STOCK);
                    }
                    productRepository.save(product);

                    CommandItem commandItem = new CommandItem();
                    commandItem.setCommand(command);
                    commandItem.setProduct(product);
                    commandItem.setQuantity(cartItem.getQuantity());
                    return commandItem;
                })
                .collect(Collectors.toSet());

        command.setItems(commandItems);
        Command savedCommand = commandRepository.save(command);

        clearCart(clientId);

        return savedCommand.getId();
    }

    private Cart createNewCart(Long clientId) {
        Client client = clientRepository.findById(clientId)
                .orElseThrow(() -> new EntityNotFoundException("Client not found"));

        Cart cart = new Cart();
        cart.setClient(client);
        cart.setItems(new ArrayList<>());
        return cartRepository.save(cart);
    }

    private CartDTO convertToDTO(Cart cart) {
        CartDTO dto = new CartDTO();
        dto.setId(cart.getId());
        dto.setClientId(cart.getClient().getId());

        List<CartItemDTO> itemDTOs = cart.getItems().stream()
                .map(this::convertToItemDTO)
                .collect(Collectors.toList());

        dto.setItems(itemDTOs);
        dto.setTotalItems(itemDTOs.size());

        double totalAmount = itemDTOs.stream()
                .mapToDouble(item -> item.getProductPrice() * item.getQuantity())
                .sum();
        dto.setTotalAmount(totalAmount);

        return dto;
    }

    private CartItemDTO convertToItemDTO(CartItem item) {
        CartItemDTO dto = new CartItemDTO();
        dto.setId(item.getId());
        dto.setProductId(item.getProduct().getId());
        dto.setProductName(item.getProduct().getNameOfProduct());
        dto.setProductPrice(item.getProduct().getPriceOfProduct());
        dto.setQuantity(item.getQuantity());
        dto.setTotalPrice(item.getProduct().getPriceOfProduct() * item.getQuantity());
        return dto;
    }
}