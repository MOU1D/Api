package com.example.ApiRest.Service.implementation;

import com.example.ApiRest.Model.CommandItem;
import com.example.ApiRest.Repository.CommandItemRepository;
import com.example.ApiRest.Service.ServiceCommandItem.CommandItemService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CommandItemServiceImpl implements CommandItemService {
    @Autowired
    private CommandItemRepository commandItemRepository;

    @Override
    public List<CommandItem> getAllCommandItems() {
        return commandItemRepository.findAll();
    }

    @Override
    public Optional<CommandItem> getCommandItemById(Long id) {
        return commandItemRepository.findById(id);
    }

    @Override
    public CommandItem saveCommandItem(CommandItem commandItem) {
        return commandItemRepository.save(commandItem);
    }

    @Override
    public void deleteCommandItem(Long id) {
        if (!commandItemRepository.existsById(id)) {
            throw new EntityNotFoundException("Command item not found with id: " + id);
        }
        commandItemRepository.deleteById(id);
    }
}