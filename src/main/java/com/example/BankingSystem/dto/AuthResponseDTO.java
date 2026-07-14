package com.example.BankingSystem.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AuthResponseDTO {
    private Long userId;
    private String email;

    public void loginRequestToAuthResponse(LoginRequestDTO dto){
        this.setEmail(dto.getEmail());
    }
}
