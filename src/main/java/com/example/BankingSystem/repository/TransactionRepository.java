package com.example.BankingSystem.repository;

import com.example.BankingSystem.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByAccountAccountId(Long accountId);
}
