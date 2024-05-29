package com.example.ApiRest.Service.ServiceCommand;

import com.example.ApiRest.Model.Command;
import com.example.ApiRest.Model.CommandStatus;

import java.util.List;

public interface getCommand {
    List<Command> getAllCommand();
    Command getCommandById(Long id);
    List<Command> getCommandByClientId(Long clientId);
    List<Command> getCommandByStatus(CommandStatus status);
}
