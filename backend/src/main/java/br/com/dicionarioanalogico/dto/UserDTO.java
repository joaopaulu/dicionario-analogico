package br.com.dicionarioanalogico.dto;

import br.com.dicionarioanalogico.entities.User;
import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Data
public class UserDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;

    @NotBlank(message = "Campo obrigatório")
    private String name;

    @Email(message = "Favor entrar com email válido")
    private String email;

    @NotBlank(message = "Campo obrigatório")
    private String status;

    Set<RoleDTO> roles = new HashSet<>();

    public UserDTO(){

    }

    public UserDTO(Long id, String name, String email, String status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.status = status;
    }

    public UserDTO(User entity) {
        id = entity.getId();
        name = entity.getName();
        email = entity.getEmail();
        status = entity.getStatus();
        entity.getRoles().forEach(role -> this.roles.add(new RoleDTO(role)));
    }
}

