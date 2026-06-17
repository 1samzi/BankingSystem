package com.example.BankingSystem.dto;

import com.example.BankingSystem.model.AccountType;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
public class AccountUpdateRequestDTO {
    @Pattern(regexp = ".*\\S.*")
    private String name;
    private AccountType accountType;
}
