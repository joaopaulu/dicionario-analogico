package br.com.dicionarioanalogico.dto;

import br.com.dicionarioanalogico.entities.Category;
import br.com.dicionarioanalogico.entities.Equivalent;
import lombok.Data;

import java.io.Serializable;

@Data
public class EquivalentDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String descricao;

    public EquivalentDTO() {

    }

    public EquivalentDTO(Long id, String descricao) {
        this.id = id;
        this.descricao = descricao;
    }

    public EquivalentDTO(Equivalent entity){
        this.id = entity.getId();
        this.descricao = entity.getDescricao();
    }

}