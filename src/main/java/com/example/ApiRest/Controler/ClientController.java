package com.example.ApiRest.Controler;

import com.example.ApiRest.Model.Client;
import com.example.ApiRest.Service.ServiceClient.ClientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("clients")
@Tag(name="clients", description="Gestion de clients")
public class ClientController {

    private final ClientService clientService;

    @Autowired
    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    // Create a new client
    @PostMapping
    @Operation(summary="Create a new client", description="Create a new client")
    @ApiResponse(responseCode = "201")
    @ApiResponse(responseCode = "401")
    @ApiResponse(responseCode = "409", description = "Conflict, similar product already exists")
    public ResponseEntity<Client> createClient(@RequestBody Client client){
        Client saveClient = clientService.createNewClient(client);
        return new ResponseEntity<>(saveClient, HttpStatus.CREATED);
    }

    // List all clients
    @Operation(summary="Get all clients")
    @ApiResponse(responseCode = "200")
    @ApiResponse(responseCode = "404")
    @ApiResponse(responseCode = "500", description = "Conflict, similar product already exists")
    public ResponseEntity<List<Client>> getClient(@RequestBody Client client){
        List<Client> clients = clientService.getAllClients();
        return new ResponseEntity<>(clients, HttpStatus.OK);
    }

    // Display a client by ID
    @GetMapping("{id}")
    @Operation(summary="Get client by id")
    @ApiResponse(responseCode = "201")
    @ApiResponse(responseCode = "401")
    @ApiResponse(responseCode = "409", description = "Conflict, similar product already exists")
    public ResponseEntity<Client> getClientById(@PathVariable ("id") Long clientId){
        Client client = clientService.getClientById(clientId);
        return new ResponseEntity<>(client, HttpStatus.OK);
    }

    // Update client by ID
    @PutMapping("{id}")
    @Operation(summary="Update client by ID")
    @ApiResponse(responseCode = "201")
    @ApiResponse(responseCode = "401")
    @ApiResponse(responseCode = "409", description = "Conflict, similar product already exists")
    public ResponseEntity<Client> updateClient(@PathVariable ("id") Long clientId, @RequestBody Client client){
        client.setId(clientId);
        clientService.updateExistingClient(client);
        return new ResponseEntity<>(client, HttpStatus.OK);
    }

    // Delete client by ID
    @DeleteMapping("{id}")
    @Operation(summary="Delete client by id")
    @ApiResponse(responseCode = "201")
    @ApiResponse(responseCode = "401")
    @ApiResponse(responseCode = "409", description = "Conflict, similar product already exists")
    public ResponseEntity<Client> deleteClient(@PathVariable ("id") Long clientId){
        clientService.deleteExistingClient(clientId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
