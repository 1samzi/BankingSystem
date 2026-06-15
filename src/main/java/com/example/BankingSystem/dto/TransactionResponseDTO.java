package com.example.BankingSystem.dto;

import com.example.BankingSystem.model.TransactionType;
import lombok.Data;

import java.math.BigDecimal;
@Data
public class TransactionResponseDTO {
    private Long accountId;
    private TransactionType transactionType;
    private BigDecimal amount;
}

