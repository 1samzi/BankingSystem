package com.example.BankingSystem.controller;

import com.example.BankingSystem.dto.AuthResponseDTO;
import com.example.BankingSystem.dto.LoginRequestDTO;
import com.example.BankingSystem.service.AuthService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(originPatterns = {"http://localhost:*", "http://127.0.0.1:*"})
@RestController
@RequestMapping("/auth")
public class AuthController {
    public AuthService authService;

    public AuthController (AuthService authService){
        this.authService = authService;
    }

    @PostMapping("/login")
    public AuthResponseDTO loginAuth (@RequestBody LoginRequestDTO dto){
        return authService.login(dto);
    }
}
