package com.example.BankingSystem.mapper;

import com.example.BankingSystem.dto.AccountCreateRequestDTO;
import com.example.BankingSystem.dto.AccountResponseDTO;
import com.example.BankingSystem.model.Account;
import com.example.BankingSystem.util.AccountNumberGenerator;
import org.springframework.stereotype.Component;

@Component
public class AccountMapper {
    public AccountResponseDTO mapAccountToResponseDTO(Account account) {
        AccountResponseDTO dto = new AccountResponseDTO();
        dto.setId((account.getAccountId()));
        dto.setAccountNumber(AccountNumberGenerator.generate(account.getAccountId()));
        dto.setUser(account.getUser());
        dto.setBalance(account.getBalance());
        dto.setAccountType(account.getAccountType());
        dto.setName(account.getName());
        return dto;
    }
    public Account mapAccountDTOToAccount(AccountCreateRequestDTO dto){
        Account account = new Account();

        account.setAccountType(dto.getAccountType());
        account.setName(dto.getName());
        account.setBalance(dto.getBalance());
        //TODO : once transactions are ready
        //account.setTransactions(dto.getTransactions());
        return account;
    }
}
