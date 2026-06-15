package com.example.BankingSystem.service;

import com.example.BankingSystem.dto.TransactionCreateRequestDTO;
import com.example.BankingSystem.mapper.TransactionMapper;
import com.example.BankingSystem.model.Account;
import com.example.BankingSystem.model.Transaction;
import com.example.BankingSystem.repository.AccountRepository;
import com.example.BankingSystem.repository.TransactionRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class TransactionService {
    private final TransactionRepository repo;
    private final TransactionMapper transactionMapper;
    private final AccountRepository accountRepository;

    public TransactionService (TransactionRepository repository, TransactionMapper mapper, AccountRepository accountRepository){
        this.repo = repository;
        this.transactionMapper = mapper;
        this.accountRepository = accountRepository;
    }

    public Transaction saveTransaction (TransactionCreateRequestDTO dto){
        Transaction transaction = transactionMapper.mapTransactionDTOToTransaction(dto);
        Account account = accountRepository.findById(dto.getAccountId())
                .orElseThrow(() -> new RuntimeException("Cannot find associated user to save transaction. (Account ID:" + dto.getAccountId() + ")"));

        BigDecimal amount = transaction.getAmount();
        BigDecimal balance = account.getBalance();

        //Validation
        if (amount.compareTo(BigDecimal.ZERO) <= 0){
            throw new IllegalArgumentException("Transaction must be greater than 0");
        }
        //Perform transaction
        switch (transaction.getTransactionType()){
            case DEPOSIT:
                account.setBalance(balance.add(amount));
                break;
            case WITHDRAWAL:
                if (amount.compareTo(balance) > 0){
                    throw new IllegalArgumentException("Insufficient funds.");
                }
                account.setBalance(balance.subtract(amount));
                break;
            default:
                throw new IllegalArgumentException("Invalid transaction type.");

        }

        transaction.setAccount(account);
        //Save updated account balance
        accountRepository.save(account);
        //Create new transaction record
        return repo.save(transaction);
    }
}
