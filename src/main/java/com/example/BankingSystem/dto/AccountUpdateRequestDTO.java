package com.example.BankingSystem.dto;

import com.example.BankingSystem.model.AccountType;
import lombok.Data;

@Data
public class AccountUpdateRequestDTO {
    private String name;
    private AccountType accountType;
}
