package br.com.dicionarioanalogico.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class TematicDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String nome;
    private String descricao;
    private String informacao_gramatical;
    private DependencyDTO tipo_dependencia;
    private String genero;

}
