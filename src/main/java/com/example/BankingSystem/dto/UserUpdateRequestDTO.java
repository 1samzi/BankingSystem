package com.example.BankingSystem.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserUpdateRequestDTO {
    private String email;
    //TODO: future for password, need Bcrypt
}
