package br.com.dicionarioanalogico.dto;

import br.com.dicionarioanalogico.entities.Dependency;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class DependencyDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String sigla;
    private String descricao;

    public DependencyDTO() {
    }

    public DependencyDTO(Long id, String sigla, String descricao) {
        this.id = id;
        this.sigla = sigla;
        this.descricao = descricao;
    }

    public DependencyDTO(Dependency entity){
        this.id = entity.getId();
        this.sigla = entity.getSigla();
        this.descricao = entity.getDescricao();
    }

}
