package com.example.ApiRest.Service.implementation;

import com.example.ApiRest.Model.Command;
import com.example.ApiRest.Model.CommandItem;
import com.example.ApiRest.Model.CommandStatus;
import com.example.ApiRest.Repository.CommandRepository;
import com.example.ApiRest.Service.CommandService;
import com.example.ApiRest.dto.CommandDTO;
import com.example.ApiRest.dto.CommandItemDTO;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@Transactional
public class CommandServiceImpl implements CommandService {
    @Autowired
    private CommandRepository commandRepository;

    @Override
    public List<CommandDTO> getAllCommands() {
        return commandRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CommandDTO getCommandById(Long id) {
        Command command = commandRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Command not found"));
        return convertToDTO(command);
    }

    @Override
    public List<CommandDTO> getCommandsByClientId(Long clientId) {
        return commandRepository.findByClientId(clientId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public CommandDTO updateCommandStatus(Long id, String status) {
        Command command = commandRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Command not found"));
        command.setStatus(CommandStatus.valueOf(status.toUpperCase()));
        command = commandRepository.save(command);
        return convertToDTO(command);
    }

    @Override
    public void deleteCommand(Long id) {
        if (!commandRepository.existsById(id)) {
            throw new EntityNotFoundException("Command not found");
        }
        commandRepository.deleteById(id);
    }

    private CommandDTO convertToDTO(Command command) {
        CommandDTO dto = new CommandDTO();
        dto.setId(command.getId());
        dto.setClientId(command.getClient().getId());
        dto.setDateCreation(command.getDateCreation());
        dto.setStatus(command.getStatus());

        // Convert items and calculate totals
        Set<CommandItemDTO> itemDTOs = command.getItems().stream()
                .map(this::convertToItemDTO)
                .collect(Collectors.toSet());

        dto.setItems(itemDTOs);
        dto.setTotalItems(itemDTOs.size());
        dto.setTotalAmount(itemDTOs.stream()
                .mapToDouble(CommandItemDTO::getTotalPrice)
                .sum());

        return dto;
    }

    private CommandItemDTO convertToItemDTO(CommandItem item) {
        CommandItemDTO dto = new CommandItemDTO();
        dto.setId(item.getId());
        dto.setProductId(item.getProduct().getId());
        dto.setProductName(item.getProduct().getNameOfProduct());
        dto.setProductPrice(item.getProduct().getPriceOfProduct());
        dto.setQuantity(item.getQuantity());
        dto.setTotalPrice(item.getProduct().getPriceOfProduct() * item.getQuantity());
        return dto;
    }
}
