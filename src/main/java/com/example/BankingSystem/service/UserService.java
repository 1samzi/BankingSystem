package com.example.BankingSystem.service;

import com.example.BankingSystem.dto.UserCreateRequestDTO;
import com.example.BankingSystem.dto.UserResponseDTO;
import com.example.BankingSystem.dto.UserUpdateRequestDTO;
import com.example.BankingSystem.mapper.UserMapper;
import com.example.BankingSystem.model.User;
import com.example.BankingSystem.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class UserService {
    private final UserRepository repo;
    private final UserMapper userMapper;

    public UserService(UserRepository repository, UserMapper userMapper){
        this.repo = repository;
        this.userMapper = userMapper;
    }

    public User saveUser(UserCreateRequestDTO dto){
        User user = userMapper.mapUserRequestDTOtoUser(dto);
        return repo.save(user);
    }

    //TODO: optional add batch creation

    //TODO: Write this function lol
    public User deleteUserById(Long id) {
        User userToDelete = repo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found for DELETE request. (ID: " + id + ")"));
        repo.deleteById(id);
        return userToDelete;
    }

    public UserResponseDTO getUser(Long id) {
        User user = repo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found for GET request. (ID: " + id + ")"));
        return userMapper.mapUserToUserResponseDTO(user);
    }

    public List<UserResponseDTO> getUsers() {
        List<User> users = repo.findAll();
        return users.stream().map(userMapper::mapUserToUserResponseDTO).toList();
    }

    public User updateUser(Long id, UserUpdateRequestDTO dto) {
        User userToUpdate = repo.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found for PATCH request. (ID: " + id + ")"));
        if (dto.getEmail() != null){
            userToUpdate.setEmail(dto.getEmail());
        }
        return repo.save(userToUpdate);
    }
}
