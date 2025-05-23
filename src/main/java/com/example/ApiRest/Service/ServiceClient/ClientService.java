package com.example.ApiRest.Service.ServiceClient;

import com.example.ApiRest.Model.Client;
import java.util.List;
import java.util.Optional;

public interface ClientService {
    List<Client> getAllClients();

    Optional<Client> getClientById(Long id);

    Client saveClient(Client client);

    void deleteClient(Long id);
}
