package com.example.ApiRest.Service.ServiceCommandItem;

import com.example.ApiRest.Model.Client;
import com.example.ApiRest.Model.CommandItem;

public interface deleteItem {
    CommandItem deleteExistingItem(Long ItemId);
}
