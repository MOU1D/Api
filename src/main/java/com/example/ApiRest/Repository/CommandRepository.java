package com.example.ApiRest.Repository;

import com.example.ApiRest.Model.Command;
import com.example.ApiRest.Model.CommandStatus;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommandRepository extends JpaRepository<Command, Long> {
    List<Command> findByClientId(Long clientId);
    List<Command> findByStatus(CommandStatus status);
}
