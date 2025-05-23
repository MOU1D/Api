package com.example.ApiRest.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "Products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String nameOfProduct;

    @Column(name = "price_of_product", nullable = false)
    private Double priceOfProduct;

    @Column(name = "description_of_product", nullable = false)
    private String descriptionOfProduct;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "image_url")
    private String imageUrl;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private ProductStatus status;

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    @JsonManagedReference("product-items")
    private Set<CommandItem> items = new LinkedHashSet<>();

    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    @JsonManagedReference("product-cart-items")
    private Set<CartItem> cartItems = new LinkedHashSet<>();
}
