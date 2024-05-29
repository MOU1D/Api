package com.example.ApiRest.Service.implementation;

import com.example.ApiRest.Model.Client;
import com.example.ApiRest.Repository.ClientRepository;
import com.example.ApiRest.Service.ServiceClient.ClientService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientServiceImpl implements ClientService {
    @Autowired
    private ClientRepository clientRepository;

    @Override
    public Client createNewClient(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client getClientById(Long clientId) {
        Optional<Client> optionalClient = clientRepository.findById(clientId);
        return optionalClient.get();
    }

    @Override
    public List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @Override
    public Client updateExistingClient(Client client) {
        Client existingClient = clientRepository.findById(client.getId()).get();
        existingClient.setId(client.getId());
        existingClient.setFirstName(client.getFirstName());
        existingClient.setSecondName(client.getSecondName());
        existingClient.setDateOfBirth(client.getDateOfBirth());
        existingClient.setEmail(client.getEmail());
        return existingClient;
    }

    @Override
    public Client deleteExistingClient(Long clientId) {
        clientRepository.deleteById(clientId);
        return null;
    }

}
