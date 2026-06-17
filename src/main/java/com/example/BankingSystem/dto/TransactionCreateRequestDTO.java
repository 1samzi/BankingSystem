package com.example.BankingSystem.dto;

import com.example.BankingSystem.model.TransactionType;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.math.BigDecimal;
@Data
public class TransactionCreateRequestDTO {
    @NotNull
    private Long accountId;

    @NotNull
    private TransactionType transactionType;

    @NotNull
    @Positive
    private BigDecimal amount;
}
