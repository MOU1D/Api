package com.example.ApiRest.Service.implementation;

import com.example.ApiRest.Model.Client;
import com.example.ApiRest.Model.Command;
import com.example.ApiRest.Repository.ClientRepository;
import com.example.ApiRest.Service.ClientService;
import com.example.ApiRest.dto.ClientCommandDTO;
import com.example.ApiRest.dto.ClientDTO;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class ClientServiceImpl implements ClientService {

    @Autowired
    private ClientRepository clientRepository;

    @Override
    public List<ClientDTO> getAllClients() {
        return clientRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public ClientDTO getClientById(Long id) {
        Client client = clientRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Client not found"));
        return convertToDTO(client);
    }

    @Override
    public ClientDTO saveClient(ClientDTO clientDTO) {
        Client client = convertToEntity(clientDTO);
        client = clientRepository.save(client);
        return convertToDTO(client);
    }

    @Override
    public void deleteClient(Long id) {
        if (!clientRepository.existsById(id)) {
            throw new EntityNotFoundException("Client not found");
        }
        clientRepository.deleteById(id);
    }

    private ClientDTO convertToDTO(Client client) {
        ClientDTO dto = new ClientDTO();
        dto.setId(client.getId());
        dto.setFirstName(client.getFirstName());
        dto.setSecondName(client.getSecondName());
        dto.setLastName(client.getLastName());
        dto.setDateOfBirth(client.getDateOfBirth());
        dto.setEmail(client.getEmail());
        dto.setAddress(client.getAddress());
        dto.setPhoneNumber(client.getPhoneNumber());

        // Convert commands to DTOs - this will trigger lazy loading within the
        // transaction
        List<ClientCommandDTO> commandDTOs = client.getCommands().stream()
                .map(this::convertToCommandDTO)
                .collect(Collectors.toList());
        dto.setCommands(commandDTOs);

        return dto;
    }

    private Client convertToEntity(ClientDTO dto) {
        Client client = new Client();
        client.setId(dto.getId());
        client.setFirstName(dto.getFirstName());
        client.setSecondName(dto.getSecondName());
        client.setLastName(dto.getLastName());
        client.setDateOfBirth(dto.getDateOfBirth());
        client.setEmail(dto.getEmail());
        client.setAddress(dto.getAddress());
        client.setPhoneNumber(dto.getPhoneNumber());
        return client;
    }

    private ClientCommandDTO convertToCommandDTO(Command command) {
        ClientCommandDTO dto = new ClientCommandDTO();
        dto.setId(command.getId());
        dto.setDateCreation(command.getDateCreation());
        dto.setStatus(command.getStatus());
        dto.setNumberOfItems(command.getItems().size());
        dto.setTotalAmount(command.getItems().stream()
                .mapToDouble(item -> item.getProduct().getPriceOfProduct() * item.getQuantity())
                .sum());
        return dto;
    }
}
