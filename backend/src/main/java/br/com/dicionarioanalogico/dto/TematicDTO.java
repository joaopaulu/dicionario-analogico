package br.com.dicionarioanalogico.dto;

import br.com.dicionarioanalogico.entities.Tematic;
import lombok.Data;

import java.io.Serializable;

@Data
public class TematicDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String nome;
    private String descricao;
    private String informacao_gramatical;
    private String tipo_dependencia;
    private String genero;

    public TematicDTO(){

    }

    public TematicDTO(Long id, String nome, String descricao, String informacao_gramatical, String tipo_dependencia, String genero) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.informacao_gramatical = informacao_gramatical;
        this.tipo_dependencia = tipo_dependencia;
        this.genero = genero;
    }

    public TematicDTO(Tematic entity){
        this.id = entity.getId();
        this.nome = entity.getNome();
        this.descricao = entity.getDescricao();
        this.informacao_gramatical = entity.getInformacao_gramatical();
        this.tipo_dependencia = entity.getTipo_dependencia();
        this.genero = entity.getGenero();
    }


}