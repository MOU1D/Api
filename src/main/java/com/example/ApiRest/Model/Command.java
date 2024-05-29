package com.example.ApiRest.Model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class Command {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "client_id")
    private Client client;

    @Enumerated(EnumType.STRING)
    private CommandStatus status;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date dateCreation;

    @OneToMany(mappedBy = "command", cascade = CascadeType.ALL)
    private List<CommandItem> items;

}
