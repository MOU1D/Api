package com.example.ApiRest.dto;

import com.example.ApiRest.Model.CommandStatus;
import java.util.Date;
import java.util.LinkedHashSet;
import java.util.Set;

public class CommandDTO {
    private Long id;
    private Long clientId;
    private Date dateCreation;
    private CommandStatus status;
    private Set<CommandItemDTO> items = new LinkedHashSet<>();
    private Double totalAmount;
    private Integer totalItems;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public Date getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(Date dateCreation) {
        this.dateCreation = dateCreation;
    }

    public CommandStatus getStatus() {
        return status;
    }

    public void setStatus(CommandStatus status) {
        this.status = status;
    }

    public Set<CommandItemDTO> getItems() {
        return items;
    }

    public void setItems(Set<CommandItemDTO> items) {
        this.items = items;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Integer getTotalItems() {
        return totalItems;
    }

    public void setTotalItems(Integer totalItems) {
        this.totalItems = totalItems;
    }
}