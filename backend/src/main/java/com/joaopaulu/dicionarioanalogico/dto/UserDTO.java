package com.joaopaulu.dicionarioanalogico.dto;

import com.joaopaulu.dicionarioanalogico.entities.User;
import lombok.Data;

import java.io.Serializable;

@Data
public class UserDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String username;
    private String password;
    private String role;
    private String email;

    public UserDTO(){

    }

    public UserDTO(Long id, String username, String password, String role, String email) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.email = email;
    }

    public UserDTO(User entity){
        this.id = entity.getId();
        this.username = entity.getUsername();
        this.password = entity.getPassword();
        this.role = entity.getRole();
        this.email = entity.getEmail();
    }

}
