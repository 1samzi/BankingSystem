package com.example.BankingSystem.controller;

import com.example.BankingSystem.dto.TransactionCreateRequestDTO;
import com.example.BankingSystem.dto.TransactionResponseDTO;
import com.example.BankingSystem.model.Transaction;
import com.example.BankingSystem.service.TransactionService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(originPatterns = {"http://localhost:*", "http://127.0.0.1:*"})
@RestController
@RequestMapping("/transactions")
public class TransactionController {
    private final TransactionService transactionService;

    public TransactionController(TransactionService transactionService){
        this.transactionService = transactionService;
    }

    @PostMapping
    public Transaction createTransaction(
            @Valid @RequestBody TransactionCreateRequestDTO dto
    ){
        return transactionService.saveTransaction(dto);
    }

    @GetMapping("/{id}")
    public TransactionResponseDTO getTransaction(
            @PathVariable Long id
    ){
        return transactionService.getTransaction(id);
    }

    @GetMapping
    public List<TransactionResponseDTO> getTransactions(){return transactionService.getTransactions();}

    @GetMapping("/account/{accountId}")
    public List<TransactionResponseDTO> getTransactionsByAccountId(
            @PathVariable Long accountId
    ){
        return transactionService.getTransactionsByAccountId(accountId);
    }

    //No deletions/patching for auditing purposes

}
