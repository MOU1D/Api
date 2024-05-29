package com.example.ApiRest.Controler;

import com.example.ApiRest.Model.Command;
import com.example.ApiRest.Service.ServiceCommand.CommandService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("commands")
@Tag(name="command", description="Gestion of command" )
public class CommandController {
    @Autowired
    private CommandService commandService;

    @Operation(summary = "Récupérer toutes les commandes")
    @GetMapping
    public List<Command> getAllCommand() {
        return commandService.getAllCommand();
    }

    @Operation(summary = "Récupérer une commande par ID")
    @GetMapping("/{id}")
    public ResponseEntity<Command> getCommandById(@PathVariable Long id) {
        Command command = commandService.getCommandById(id);
        return ResponseEntity.ok(command);
    }

    @Operation(summary = "Créer une nouvelle commande")
    @PostMapping
    public ResponseEntity<Command> createCommand(@RequestBody Command command) {
        Command createdCommand = commandService.createCommand(command);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCommand);
    }

    @Operation(summary = "Mettre à jour une commande par ID")
    @PutMapping("/{id}")
    public ResponseEntity<Void> updateCommand(@PathVariable Long commandId, @RequestBody Command command) {
        command.setId(commandId);
        commandService.updateExistingCommand(command);
        return ResponseEntity.ok().build();
    }

    @Operation(summary = "Supprimer une commande par ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCommand(@PathVariable Long commandId) {
        commandService.deleteExistingCommand(commandId);
        return ResponseEntity.ok().build();
    }
}
