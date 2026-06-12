package com.example.BankingSystem.mapper;

import com.example.BankingSystem.dto.AccountCreateRequestDTO;
import com.example.BankingSystem.dto.AccountResponseDTO;
import com.example.BankingSystem.model.Account;
import org.springframework.stereotype.Component;

@Component
public class AccountMapper {
    public AccountResponseDTO accountMapperToResponseDTO(Account account) {
        AccountResponseDTO dto = new AccountResponseDTO();
        dto.setId((account.getAccountId()));
        dto.setUser(account.getUser());
        dto.setBalance(account.getBalance());
        dto.setAccountType(account.getAccountType());
        dto.setName(dto.getName());
        return dto;
    }
    public Account accountMapperToAccount(AccountCreateRequestDTO dto){
        Account account = new Account();

        account.setAccountType(dto.getAccountType());
        account.setUser(dto.getUser());
        account.setName(dto.getName());
        account.setBalance(dto.getBalance());
        //TODO : once transactions are ready
        //account.setTransactions(dto.getTransactions());
        return account;
    }
}
