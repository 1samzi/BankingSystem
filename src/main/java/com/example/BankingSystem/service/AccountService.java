package com.example.BankingSystem.service;

import com.example.BankingSystem.dto.AccountCreateRequestDTO;
import com.example.BankingSystem.dto.AccountResponseDTO;
import com.example.BankingSystem.dto.AccountUpdateRequestDTO;
import com.example.BankingSystem.mapper.AccountMapper;
import com.example.BankingSystem.model.Account;
import com.example.BankingSystem.model.User;
import com.example.BankingSystem.repository.AccountRepository;
import com.example.BankingSystem.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    private final AccountRepository repo;
    private final AccountMapper accountMapper;
    private final UserRepository userRepository;

    public AccountService (AccountRepository repository, AccountMapper mapper, UserRepository userRepository){
        this.repo = repository;
        this.accountMapper = mapper;
        this.userRepository = userRepository;
    }

    public Account saveAccount(AccountCreateRequestDTO dto){
        Account account = accountMapper.mapAccountDTOToAccount(dto);
        User user = userRepository.findById(dto.getUserId())
                .orElseThrow(() -> new EntityNotFoundException("Cannot associated user to save account. (User ID:" + dto.getUserId() + ")"));
        account.setUser(user);
        return repo.save(account);
    }

    public AccountResponseDTO getAccount(Long id){
         Account account = repo.findById(id)
                 .orElseThrow(() -> new EntityNotFoundException("Account not found for GET request. (ID: " + id + ")"));
         return accountMapper.mapAccountToResponseDTO(account);
    }

    public List<AccountResponseDTO> getAccounts(){
        List<Account> accounts = repo.findAll();
        return accounts.stream().map(accountMapper::mapAccountToResponseDTO).toList();
    }

    public List<AccountResponseDTO> getAccountsByUserId(Long userId){
        List<Account> accounts = repo.findByUserUserId(userId);
        return accounts.stream().map(accountMapper::mapAccountToResponseDTO).toList();
    }

    public Account updateAccount(Long id, AccountUpdateRequestDTO dto){
        Account accountToUpdate = repo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Account not found for PATCH request. (ID: " + id + ")"));
        if (dto.getName() != null){
            accountToUpdate.setName(dto.getName());
        }
        if (dto.getAccountType() != null){
            accountToUpdate.setAccountType(dto.getAccountType());
        }
        repo.save(accountToUpdate);
        return accountToUpdate;

    }

    public Account deleteAccount(Long id){
        Account accountToDelete = repo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Account not found for DELETE request. (ID: " + id + ")"));
        repo.deleteById(id);

        return accountToDelete;

    }


}
