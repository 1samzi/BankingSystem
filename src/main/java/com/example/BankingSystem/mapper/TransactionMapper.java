package com.example.BankingSystem.mapper;

import com.example.BankingSystem.dto.TransactionCreateRequestDTO;
import com.example.BankingSystem.dto.TransactionResponseDTO;
import com.example.BankingSystem.model.Transaction;
import org.springframework.stereotype.Component;

@Component
public class TransactionMapper {
    public TransactionResponseDTO mapTransactionToResponseDTO(Transaction transaction){
        TransactionResponseDTO dto = new TransactionResponseDTO();
        dto.setTransactionType(transaction.getTransactionType());
        dto.setAmount(transaction.getAmount());
        dto.setAccountId(transaction.getAccount().getAccountId());
        return dto;
    }

    public Transaction mapTransactionDTOToTransaction(TransactionCreateRequestDTO dto){
        Transaction transaction = new Transaction();
        transaction.setTransactionType(dto.getTransactionType());
        transaction.setAmount(dto.getAmount());
        transaction.setTransactionType(dto.getTransactionType());
        return transaction;
    }
}
