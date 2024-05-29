package com.example.ApiRest.Repository;

import com.example.ApiRest.Model.CommandItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommandItemRepository extends JpaRepository<CommandItem, Long> {
}
