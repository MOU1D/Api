package com.example.ApiRest.Service;

import com.example.ApiRest.dto.CommandDTO;
import java.util.List;

public interface CommandService {
    List<CommandDTO> getAllCommands();

    CommandDTO getCommandById(Long id);

    List<CommandDTO> getCommandsByClientId(Long clientId);

    CommandDTO updateCommandStatus(Long id, String status);

    void deleteCommand(Long id);
}