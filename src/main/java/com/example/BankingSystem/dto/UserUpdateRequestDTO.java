package com.example.BankingSystem.dto;

import jakarta.validation.constraints.Email;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserUpdateRequestDTO {
    @Email
    private String email;
    //TODO: future for password, need Bcrypt
}
