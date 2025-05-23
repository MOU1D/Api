package com.example.ApiRest.Controller;

import com.example.ApiRest.Service.CommandService;
import com.example.ApiRest.dto.CommandDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/commands")
@Tag(name = "Command", description = "Command management APIs")
@CrossOrigin(origins = "http://localhost:3000")
public class CommandController {

    private final CommandService commandService;

    @Autowired
    public CommandController(CommandService commandService) {
        this.commandService = commandService;
    }

    @Operation(summary = "Get all commands")
    @GetMapping
    public ResponseEntity<List<CommandDTO>> getAllCommands() {
        return ResponseEntity.ok(commandService.getAllCommands());
    }

    @Operation(summary = "Get a command by ID")
    @GetMapping("/{id}")
    public ResponseEntity<CommandDTO> getCommand(@PathVariable Long id) {
        return ResponseEntity.ok(commandService.getCommandById(id));
    }

    @Operation(summary = "Get commands by client ID")
    @GetMapping("/client/{clientId}")
    public ResponseEntity<List<CommandDTO>> getCommandsByClient(@PathVariable Long clientId) {
        return ResponseEntity.ok(commandService.getCommandsByClientId(clientId));
    }

    @Operation(summary = "Update command status")
    @PutMapping("/{id}/status")
    public ResponseEntity<CommandDTO> updateStatus(
            @PathVariable Long id,
            @RequestParam String status) {
        return ResponseEntity.ok(commandService.updateCommandStatus(id, status));
    }

    @Operation(summary = "Delete a command")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCommand(@PathVariable Long id) {
        commandService.deleteCommand(id);
        return ResponseEntity.ok().build();
    }
}
