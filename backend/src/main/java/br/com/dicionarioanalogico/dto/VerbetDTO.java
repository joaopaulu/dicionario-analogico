package br.com.dicionarioanalogico.dto;

import br.com.dicionarioanalogico.entities.Verbet;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

@Data
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
    private Long tipoDependencia;
    private String equiEspanhol;
    private String equiFrances;
    private String equiIngles;
    private String equiItaliano;
    private String equiJapones;
    private String equiLibras;

    public VerbetDTO() {
    }

    public VerbetDTO(Long id, String descricao, String separacaoSilabica, String pronuncia, String genero, String transitividadeVerbal, String variantes, String definicao, String fonteDefinicao, String abvFonteContexto, String notas, String fonteNota, String autor, String abvAutor, String fraseologia, LocalDate data, String ilustracao, Long dependente, Long tipoDependencia, String equiEspanhol, String equiFrances, String equiIngles, String equiItaliano, String equiJapones, String equiLibras) {
        this.id = id;
        this.descricao = descricao;
        this.separacaoSilabica = separacaoSilabica;
        this.pronuncia = pronuncia;
        this.genero = genero;
        this.transitividadeVerbal = transitividadeVerbal;
        this.variantes = variantes;
        this.definicao = definicao;
        this.fonteDefinicao = fonteDefinicao;
        this.abvFonteContexto = abvFonteContexto;
        this.notas = notas;
        this.fonteNota = fonteNota;
        this.autor = autor;
        this.abvAutor = abvAutor;
        this.fraseologia = fraseologia;
        this.data = data;
        this.ilustracao = ilustracao;
        this.dependente = dependente;
        this.tipoDependencia = tipoDependencia;
        this.equiEspanhol = equiEspanhol;
        this.equiFrances = equiFrances;
        this.equiIngles = equiIngles;
        this.equiItaliano = equiItaliano;
        this.equiJapones = equiJapones;
        this.equiLibras = equiLibras;
    }

    public VerbetDTO(Verbet entity) {
        id = entity.getId();
        descricao = entity.getDescricao();
        separacaoSilabica = entity.getSeparacaoSilabica();
        pronuncia = entity.getPronuncia();
        transitividadeVerbal = entity.getTransitividadeVerbal();
        genero = entity.getGenero();
        variantes = entity.getVariantes();
        definicao = entity.getDefinicao();
        fonteDefinicao = entity.getFonteDefinicao();
        abvFonteContexto = entity.getAbvFonteContexto();
        notas = entity.getNotas();
        fonteNota = entity.getFonteNota();
        autor = entity.getAutor();
        abvAutor = entity.getAbvAutor();
        fraseologia = entity.getFraseologia();
        data = entity.getData();
        ilustracao = entity.getIlustracao();
        dependente = entity.getDependente();
        tipoDependencia = entity.getTipoDependencia();
        equiEspanhol = entity.getEquiEspanhol();
        equiFrances = entity.getEquiFrances();
        equiIngles = entity.getEquiIngles();
        equiItaliano = entity.getEquiItaliano();
        equiJapones = entity.getEquiJapones();
        equiLibras = entity.getEquiLibras();
    }
}
