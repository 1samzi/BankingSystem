package com.example.BankingSystem.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

//name "User" is reserved in post gre
@Entity
@Table(name = "users")
public class User {
    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Getter
    @Setter
    @Column (nullable = false, unique = true)
    private String email;


    @Getter
    @Setter
    @Column(name = "password_hash", nullable = true, length = 255)
    private String passwordHash;

    @Getter
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Account> accounts = new ArrayList<>();

    @Getter
    @CreationTimestamp
    private Instant createdAt;

    @Getter
    @UpdateTimestamp
    private Instant updatedAt;

    public User(String email){
        this.email = email;
    }

    public User(){
    }


}

