package com.example.BankingSystem.service;

import com.example.BankingSystem.dto.AuthResponseDTO;
import com.example.BankingSystem.dto.LoginRequestDTO;
import com.example.BankingSystem.mapper.UserMapper;
import com.example.BankingSystem.model.User;
import com.example.BankingSystem.repository.UserRepository;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;
    public AuthService (UserRepository userRepository, PasswordEncoder passwordEncoder, UserMapper mapper){
        this.userRepo = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public AuthResponseDTO login (LoginRequestDTO dto){
        User user = userRepo.findByEmail(dto.getEmail())
                .orElseThrow(() -> new BadCredentialsException("Invalid email or password"));
        AuthResponseDTO responseDTO = new AuthResponseDTO();
        responseDTO.setUserId(user.getUserId());
        responseDTO.setEmail(user.getEmail());
        if (!passwordEncoder.matches(dto.getPassword(), user.getPasswordHash())){
            throw new BadCredentialsException("Invalid email or password");
        }
        return responseDTO;
    }
}
