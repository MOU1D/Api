package com.example.ApiRest.Controller;

import com.example.ApiRest.Model.Client;
import com.example.ApiRest.Repository.ClientRepository;
import com.example.ApiRest.Security.JwtTokenUtil;
import com.example.ApiRest.Security.TokenBlacklist;
import com.example.ApiRest.dto.LoginRequest;
import com.example.ApiRest.dto.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {

    @Autowired
    private ClientRepository clientRepository;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private TokenBlacklist tokenBlacklist;

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody LoginRequest request) {
        Client client = new Client();
        client.setEmail(request.getEmail());
        client.setPassword(passwordEncoder.encode(request.getPassword()));
        // Données obligatoires pour le test
        client.setFirstName("Test");
        client.setLastName("User");
        client.setSecondName("Test");
        client.setDateOfBirth(new Date());
        client.setAddress("Test Address");
        client.setPhoneNumber("0123456789");

        client = clientRepository.save(client);

        String token = jwtTokenUtil.generateToken(client.getEmail(), client.getId());
        return ResponseEntity.ok(new LoginResponse(token));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Client client = clientRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("Client not found"));

        if (!passwordEncoder.matches(loginRequest.getPassword(), client.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtTokenUtil.generateToken(client.getEmail(), client.getId());
        return ResponseEntity.ok(new LoginResponse(token));
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestHeader("Authorization") String authHeader) {
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            tokenBlacklist.blacklist(token);
            return ResponseEntity.ok().body("Successfully logged out");
        }
        return ResponseEntity.badRequest().body("Invalid token format");
    }
}