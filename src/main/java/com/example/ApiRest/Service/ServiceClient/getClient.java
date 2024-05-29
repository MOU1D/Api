package com.example.ApiRest.Service.ServiceClient;

import com.example.ApiRest.Model.Client;

import java.util.List;

public interface getClient {
    Client getClientById(Long clientId);
    List<Client> getAllClients();

}
