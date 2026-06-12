package com.example.BankingSystem.dto;

import com.example.BankingSystem.model.Account;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class UserResponseDTO {
    private Long id;
    private String email;
    private List<Account> accounts;
}
