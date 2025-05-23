package com.example.ApiRest.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@Table(name = "Commands")
public class Command {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER, optional = false)
    @JoinColumn(name = "client_id", nullable = false)
    @JsonBackReference
    private Client client;

    @Column(name = "date_creation", nullable = false)
    private Date dateCreation;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private CommandStatus status;

    @OneToMany(mappedBy = "command", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private Set<CommandItem> items = new LinkedHashSet<>();
}
