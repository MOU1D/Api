package com.example.ApiRest.Service;

import com.example.ApiRest.dto.ClientDTO;
import java.util.List;

public interface ClientService {
    List<ClientDTO> getAllClients();

    ClientDTO getClientById(Long id);

    ClientDTO saveClient(ClientDTO clientDTO);

    void deleteClient(Long id);
}