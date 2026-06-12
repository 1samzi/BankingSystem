package com.example.BankingSystem.dto;

import com.example.BankingSystem.model.AccountType;
import com.example.BankingSystem.model.User;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
@Setter
@Getter
public class AccountResponseDTO {
    private Long id;
    private User user;
    private BigDecimal balance;
    private String name;
    private AccountType accountType;
    //TODO transactions? I guess it is fine with response
}
