package com.example.ApiRest.Repository;

import com.example.ApiRest.Model.Command;
import com.example.ApiRest.Model.CommandStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommandRepository extends JpaRepository<Command, Long> {
    List<Command> findByClientId(Long clientId);

    List<Command> findByStatus(CommandStatus status);
}
