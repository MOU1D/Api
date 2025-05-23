package com.example.ApiRest.Service.ServiceCommandItem;

import com.example.ApiRest.Model.CommandItem;
import java.util.List;
import java.util.Optional;

public interface CommandItemService {
    List<CommandItem> getAllCommandItems();

    Optional<CommandItem> getCommandItemById(Long id);

    CommandItem saveCommandItem(CommandItem commandItem);

    void deleteCommandItem(Long id);
}