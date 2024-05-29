package com.example.ApiRest.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "Clients")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "first name", nullable = false)
    private String firstName;

    @Column(name = "last name", nullable = false)
    private String secondName;

    @Column(name = "date of birth", nullable = false)
    private Date dateOfBirth;

    @Column(name = "email", nullable = false)
    private String email;

    @OneToMany(mappedBy = "client", orphanRemoval = true)
    private Set<Command> commands = new LinkedHashSet<>();

    public Client() {
        // Constructeur sans argument nécessaire pour la désérialisation JSON
    }

}


