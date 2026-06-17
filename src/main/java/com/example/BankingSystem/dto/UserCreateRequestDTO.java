package com.example.BankingSystem.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserCreateRequestDTO {
    @NotBlank
    @Email
    private String email;
}
