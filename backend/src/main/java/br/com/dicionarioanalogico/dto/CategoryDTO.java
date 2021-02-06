package br.com.dicionarioanalogico.dto;

import br.com.dicionarioanalogico.entities.Category;
import lombok.Data;

import java.io.Serializable;

@Data
public class CategoryDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String descricao;

    public CategoryDTO() {

    }

    public CategoryDTO(Long id, String descricao) {
        this.id = id;
        this.descricao = descricao;
    }

    public CategoryDTO(Category entity){
        this.id = entity.getId();
        this.descricao = entity.getDescricao();
    }
}