package com.example.ApiRest.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "street", nullable = false)
    private String street;

    @Column(name="city", nullable = false)
    private String city;

    @Column(name="state", nullable = false)
    private String state;

    @Column(name="zip", nullable = false)
    private int stateCode;


}
