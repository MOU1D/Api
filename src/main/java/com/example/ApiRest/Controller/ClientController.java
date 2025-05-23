package com.example.ApiRest.Controller;

import com.example.ApiRest.Service.ClientService;
import com.example.ApiRest.dto.ClientDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/clients")
@Tag(name = "Client", description = "Client management APIs")
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @Operation(summary = "Get all clients")
    @GetMapping
    public ResponseEntity<List<ClientDTO>> getAllClients() {
        return ResponseEntity.ok(clientService.getAllClients());
    }

    @Operation(summary = "Get a client by ID")
    @GetMapping("/{id}")
    public ResponseEntity<ClientDTO> getClient(@PathVariable Long id) {
        ClientDTO client = clientService.getClientById(id);
        return ResponseEntity.ok(client);
    }

    @Operation(summary = "Create a new client")
    @PostMapping
    public ResponseEntity<ClientDTO> createClient(
            @Parameter(description = "Client to create", required = true) @Valid @RequestBody ClientDTO clientDTO) {
        ClientDTO savedClient = clientService.saveClient(clientDTO);
        return ResponseEntity.ok(savedClient);
    }

    @Operation(summary = "Update an existing client")
    @PutMapping("/{id}")
    public ResponseEntity<ClientDTO> updateClient(
            @Parameter(description = "Client ID", required = true) @PathVariable Long id,
            @Parameter(description = "Updated client details", required = true) @Valid @RequestBody ClientDTO clientDTO) {
        clientDTO.setId(id);
        ClientDTO updatedClient = clientService.saveClient(clientDTO);
        return ResponseEntity.ok(updatedClient);
    }

    @Operation(summary = "Delete a client")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(
            @Parameter(description = "Client ID", required = true) @PathVariable Long id) {
        clientService.deleteClient(id);
        return ResponseEntity.ok().build();
    }
}
