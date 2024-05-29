package com.example.ApiRest.Service.implementation;

import com.example.ApiRest.Model.Client;
import com.example.ApiRest.Model.CommandItem;
import com.example.ApiRest.Repository.CommandItemRepository;
import com.example.ApiRest.Service.ServiceCommandItem.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ItemServiceImpl implements ItemService {
    @Autowired
    private CommandItemRepository commandItemRepository;

    @Override
    public List<CommandItem> getAllItems() {
        return commandItemRepository.findAll();
    }

    @Override
    public CommandItem createNewItem(CommandItem commandItem) {
        return commandItemRepository.save(commandItem);
    }

    @Override
    public CommandItem deleteExistingItem(Long ItemId) {
        commandItemRepository.deleteById(ItemId);
        return null;
    }

    @Override
    public CommandItem updateExistingItem(Long id, CommandItem updatedItem) {
        CommandItem existingItem = commandItemRepository.findById(updatedItem.getId()).get();
        existingItem.setId(id);
        existingItem.setQuantity(updatedItem.getQuantity());
        existingItem.setCommand(updatedItem.getCommand());
        existingItem.setProduct(updatedItem.getProduct());
        return existingItem;
    }
}
