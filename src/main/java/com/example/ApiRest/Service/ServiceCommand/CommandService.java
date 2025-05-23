package com.example.ApiRest.Service.ServiceCommand;

import com.example.ApiRest.Model.Command;
import java.util.List;
import java.util.Optional;

public interface CommandService {
    List<Command> getAllCommands();

    Optional<Command> getCommandById(Long id);

    Command saveCommand(Command command);

    void deleteCommand(Long id);
}
