package com.example.ApiRest.Service.ServiceCommandItem;

import com.example.ApiRest.Model.CommandItem;

public interface updateItem {
    CommandItem updateExistingItem(Long id, CommandItem updatedItem);
}
