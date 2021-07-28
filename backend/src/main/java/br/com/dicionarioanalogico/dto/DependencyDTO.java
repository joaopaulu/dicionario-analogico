package br.com.dicionarioanalogico.dto;

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

}
