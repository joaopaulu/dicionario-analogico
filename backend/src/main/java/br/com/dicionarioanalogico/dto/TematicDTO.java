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
    private String informacaoGramatical;

    private DependencyDTO tipoDependencia;

    private String genero;

    /*
    public TematicDTO(){}

    public TematicDTO(Long id, String nome, String descricao, String informacaoGramatical, DependencyDTO tipoDependencia, String genero) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.informacaoGramatical = informacaoGramatical;
        this.tipoDependencia = tipoDependencia;
        this.genero = genero;
    }

    public TematicDTO(Tematic entity) {
        this.id = entity.getId();
        this.nome = entity.getNome();
        this.descricao = entity.getDescricao();
        this.informacaoGramatical = entity.getInformacaoGramatical();
        tipoDependencia = new DependencyDTO(entity.getTipoDependencia());
        this.genero = entity.getGenero();
    }

     */
}
