package com.example.BankingSystem.controller;

import com.example.BankingSystem.dto.AccountCreateRequestDTO;
import com.example.BankingSystem.dto.AccountResponseDTO;
import com.example.BankingSystem.dto.AccountUpdateRequestDTO;
import com.example.BankingSystem.mapper.AccountMapper;
import com.example.BankingSystem.model.Account;
import com.example.BankingSystem.service.AccountService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountController {
    private final AccountService accountService;
    private final AccountMapper accountMapper;

    public AccountController(AccountService accountService, AccountMapper accountMapper){
        this.accountService = accountService;
        this.accountMapper = accountMapper;
    }

    @PostMapping
    public Account createAccount(
            @RequestBody AccountCreateRequestDTO dto){
        return accountService.saveAccount(dto);
    }

    @GetMapping("/{id}")
    public AccountResponseDTO getAccount(
            @PathVariable Long id
    ){
        return accountService.getAccount(id);
    }

    @GetMapping
    public List<AccountResponseDTO> getAccounts(){
        return accountService.getAccounts();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<AccountResponseDTO> updateAccount(
            @PathVariable Long id,
            AccountUpdateRequestDTO dto
    ) {
        Account account = accountService.updateAccount(id, dto);
        AccountResponseDTO responseDTO = accountMapper.mapAccountToResponseDTO(account);
        return ResponseEntity.ok(responseDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<AccountResponseDTO> deleteAccount(
            @PathVariable Long id
    ){
        Account account = accountService.deleteAccount(id);
        AccountResponseDTO responseDTO = accountMapper.mapAccountToResponseDTO(account);
        return ResponseEntity.ok(responseDTO);
    }

}
