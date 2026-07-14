package com.example.BankingSystem.mapper;

import com.example.BankingSystem.dto.AuthResponseDTO;
import com.example.BankingSystem.dto.LoginRequestDTO;
import com.example.BankingSystem.dto.UserCreateRequestDTO;
import com.example.BankingSystem.dto.UserResponseDTO;
import com.example.BankingSystem.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {


    private final AccountMapper accountMapper;

    public UserMapper(AccountMapper accountMapper) {
        this.accountMapper = accountMapper;
    }

    public User mapUserRequestDTOtoUser(UserCreateRequestDTO dto){
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPasswordHash(dto.getPassword());
        return user;
    }

    public UserResponseDTO mapUserToUserResponseDTO(User user){
        UserResponseDTO dto = new UserResponseDTO();
        dto.setAccounts(user.getAccounts().stream().map(accountMapper::mapAccountToResponseDTO).toList());
        dto.setId(user.getUserId());
        dto.setEmail(user.getEmail());

        return dto;
    }
}
