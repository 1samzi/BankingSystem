package com.example.BankingSystem.service;

import com.example.BankingSystem.dto.AccountCreateRequestDTO;
import com.example.BankingSystem.mapper.AccountMapper;
import com.example.BankingSystem.model.User;
import com.example.BankingSystem.repository.AccountRepository;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    private final AccountRepository repo;
    private final AccountMapper accountMapper;

    public AccountService (AccountRepository repository, AccountMapper mapper){
        this.repo = repository;
        this.accountMapper = mapper;
    }

    public User saveAccount(AccountCreateRequestDTO dto){
        User user = accountMapper.accountMapperDTOtoUser(dto);
        return repo.save(user);
    }

}
