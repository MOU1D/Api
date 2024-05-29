package com.example.ApiRest.Controler;

import com.example.ApiRest.Model.CommandItem;
import com.example.ApiRest.Service.ServiceCommandItem.ItemService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("items")
@Tag(name = "Item", description="Gestion of items that are available")
public class CommandItemController {
    @Autowired
    private ItemService itemService;

    @Operation(summary = "Récupérer tous les items de commande")
    @GetMapping
    public List<CommandItem> getAllItems() {
        return itemService.getAllItems();
    }

    @Operation(summary = "Créer un nouvel item de commande")
    @PostMapping
    public ResponseEntity<CommandItem> createNewItem(@RequestBody CommandItem commandItem) {
        CommandItem newItem = itemService.createNewItem(commandItem);
        return ResponseEntity.status(HttpStatus.CREATED).body(newItem);
    }

    @Operation(summary = "Supprimer un item de commande par ID")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable Long id) {
        itemService.deleteExistingItem(id);
        return ResponseEntity.ok().build();
    }
}
