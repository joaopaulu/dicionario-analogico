package br.com.dicionarioanalogico.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
public class VerbetDescricaoDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String descricao;

    public VerbetDescricaoDTO() {
    }

    public VerbetDescricaoDTO(Long id, String descricao) {
        this.id = id;
        this.descricao = descricao;
    }
}
