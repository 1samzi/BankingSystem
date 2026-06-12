package com.example.BankingSystem.dto;

import com.example.BankingSystem.model.AccountType;
import com.example.BankingSystem.model.User;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
@Getter
@Setter
public class AccountCreateRequestDTO {
    private User user;
    private BigDecimal balance;
    private String name;
    private AccountType accountType;
    //TODO transactions after I've created DTO's etc.
}
