package com.example.BankingSystem.controller;

import com.example.BankingSystem.dto.UserCreateRequestDTO;
import com.example.BankingSystem.dto.UserResponseDTO;
import com.example.BankingSystem.dto.UserUpdateRequestDTO;
import com.example.BankingSystem.mapper.UserMapper;
import com.example.BankingSystem.model.User;
import com.example.BankingSystem.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper){
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @PostMapping
    public User createUser(
            @RequestBody UserCreateRequestDTO user){
        return userService.saveUser(user);
    }

    @GetMapping("/{id}")
    public UserResponseDTO getUser(
            @PathVariable Long id
    ){
        return userService.getUser(id);
    }

    @GetMapping
    public List<UserResponseDTO> getUsers(){
        return userService.getUsers();
    }

    @PatchMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(
            @PathVariable Long id,
            @RequestBody UserUpdateRequestDTO dto
    ){
        User updatedUser = userService.updateUser(id, dto);
        UserResponseDTO response = userMapper.mapUserToUserResponseDTO(updatedUser);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<UserResponseDTO> deleteUser (
            @PathVariable Long id
    ){
        User deletedUser = userService.deleteUserById(id);
        UserResponseDTO response = userMapper.mapUserToUserResponseDTO(deletedUser);
        return ResponseEntity.ok(response);

    }

}
