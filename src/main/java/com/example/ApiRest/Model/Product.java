package com.example.ApiRest.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "Products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "Product", nullable = false)
    private String nameOfProduct;

    @Column(name = "price", nullable = false)
    private double priceOfProduct;

    private String description;

    @Enumerated(EnumType.STRING)
    private ProductStatus productStatus;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<CommandItem> command;

}
