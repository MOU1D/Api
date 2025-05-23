package com.example.ApiRest.Controller;

import com.example.ApiRest.Model.CommandItem;
import com.example.ApiRest.Service.ServiceCommandItem.CommandItemService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/order-items")
@Tag(name = "Order Item", description = "Order item management APIs")
@CrossOrigin(origins = "http://localhost:3000")
public class CommandItemController {

    private final CommandItemService commandItemService;

    @Autowired
    public CommandItemController(CommandItemService commandItemService) {
        this.commandItemService = commandItemService;
    }

    @Operation(summary = "Get all order items")
    @GetMapping
    public ResponseEntity<List<CommandItem>> getAllCommandItems() {
        return ResponseEntity.ok(commandItemService.getAllCommandItems());
    }

    @Operation(summary = "Get an order item by ID")
    @GetMapping("/{id}")
    public ResponseEntity<CommandItem> getCommandItemById(
            @Parameter(description = "Order item ID", required = true) @PathVariable Long id) {
        return commandItemService.getCommandItemById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @Operation(summary = "Create a new order item")
    @PostMapping
    public ResponseEntity<CommandItem> createCommandItem(
            @Parameter(description = "Order item to create", required = true) @Valid @RequestBody CommandItem commandItem) {
        CommandItem savedItem = commandItemService.saveCommandItem(commandItem);
        return ResponseEntity.ok(savedItem);
    }

    @Operation(summary = "Update an existing order item")
    @PutMapping("/{id}")
    public ResponseEntity<CommandItem> updateCommandItem(
            @Parameter(description = "Order item ID", required = true) @PathVariable Long id,
            @Parameter(description = "Updated order item details", required = true) @Valid @RequestBody CommandItem commandItem) {
        commandItem.setId(id);
        CommandItem updatedItem = commandItemService.saveCommandItem(commandItem);
        return ResponseEntity.ok(updatedItem);
    }

    @Operation(summary = "Delete an order item")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCommandItem(
            @Parameter(description = "Order item ID", required = true) @PathVariable Long id) {
        commandItemService.deleteCommandItem(id);
        return ResponseEntity.ok().build();
    }
}
