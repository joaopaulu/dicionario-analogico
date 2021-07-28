package br.com.dicionarioanalogico.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDate;

@Getter
@Setter
public class VerbetDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Long id;
    private String descricao;
    private String separacaoSilabica;
    private String pronuncia;
    private String genero;
    private String transitividadeVerbal;
    private String variantes;
    private String definicao;
    private String fonteDefinicao;
    private String abvFonteContexto;
    private String notas;
    private String fonteNota;
    private String autor;
    private String abvAutor;
    private String fraseologia;
    private LocalDate data;
    private String ilustracao;
    private Long dependente;
    private String equiEspanhol;
    private String equiFrances;
    private String equiIngles;
    private String equiItaliano;
    private String equiJapones;
    private String equiLibras;

    private TematicDTO tematics;
    private DependencyDTO tipoDependencia;

}
