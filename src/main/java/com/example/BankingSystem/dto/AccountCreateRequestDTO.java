package com.example.BankingSystem.dto;

import com.example.BankingSystem.model.AccountType;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
@Getter
@Setter
public class AccountCreateRequestDTO {
    @NotNull
    @PositiveOrZero
    private BigDecimal balance;

    @NotBlank
    private String name;

    @NotNull
    private AccountType accountType;

    @NotNull
    private Long userId;
    //TODO transactions after I've created DTO's etc.
}
