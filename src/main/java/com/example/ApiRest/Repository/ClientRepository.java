package com.example.ApiRest.Repository;

import com.example.ApiRest.Model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
