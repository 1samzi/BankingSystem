package com.example.BankingSystem.dto;

import com.example.BankingSystem.model.AccountType;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
@Getter
@Setter
public class AccountCreateRequestDTO {
    private BigDecimal balance;
    private String name;
    private AccountType accountType;
    private Long userId;
    //TODO transactions after I've created DTO's etc.
}
