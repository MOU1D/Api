package com.example.ApiRest.Service.implementation;

import com.example.ApiRest.Model.Command;
import com.example.ApiRest.Model.CommandStatus;
import com.example.ApiRest.Repository.CommandRepository;
import com.example.ApiRest.Service.ServiceCommand.CommandService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CommandServiceImpl implements CommandService {
    @Autowired
    private CommandRepository commandRepository;

    @Override
    public Command createCommand(Command command) {
        // Assurez-vous que tous les champs nécessaires sont renseignés
        if (command.getClient() != null && command.getStatus() != null) {
            // Appel à la méthode save du repository
            return commandRepository.save(command);
        } else {
            // Ajoutez des logs pour voir les valeurs des champs
            System.out.println("Client: " + command.getClient());
            System.out.println("Status: " + command.getStatus());

            // Gérer le cas où les données ne sont pas correctement configurées
            // Lancez une exception, enregistrez des logs, ou effectuez une autre action appropriée
            throw new IllegalArgumentException("Certains champs de la commande ne sont pas correctement renseignés.");
        }
    }


    @Override
    public List<Command> getAllCommand() {
        return commandRepository.findAll();
    }

    @Override
    public Command getCommandById(Long id) {
        return commandRepository.findById(id).orElse(null);
    }

    @Override
    public List<Command> getCommandByClientId(Long clientId) {
        return commandRepository.findByClientId(clientId);
    }

    @Override
    public List<Command> getCommandByStatus(CommandStatus status) {
        return commandRepository.findByStatus(status);
    }

    @Override
    public Command updateExistingCommand(Command command) {
        Command existingCommand = commandRepository.findById(command.getId()).get();
        existingCommand.setId(command.getId());
        existingCommand.setClient(command.getClient());
        existingCommand.setStatus(command.getStatus());
        existingCommand.setDateCreation(command.getDateCreation());
        existingCommand.setItems(command.getItems());
        return existingCommand;
    }

    @Override
    public Command deleteExistingCommand(Long id) {
        commandRepository.deleteById(id);
        return null;
    }
}
