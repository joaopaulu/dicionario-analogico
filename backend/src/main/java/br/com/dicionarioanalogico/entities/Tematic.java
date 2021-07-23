package br.com.dicionarioanalogico.entities;

import br.com.dicionarioanalogico.entities.enums.TipoDependenciaCamposTematicos;
import lombok.EqualsAndHashCode;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "campos_tematicos")
public class Tematic implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @EqualsAndHashCode.Include
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    private String descricao;

    private String informacao_gramatical;

    private Integer tipo_dependencia;

    private String genero;

    @CreationTimestamp
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private LocalDate createdAt;

    @UpdateTimestamp
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private LocalDate updatedAt;

    public Tematic(){}

    public Tematic(Long id, String nome, String descricao, String informacao_gramatical, TipoDependenciaCamposTematicos tipo_dependencia, String genero) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.informacao_gramatical = informacao_gramatical;
        this.tipo_dependencia = tipo_dependencia.getCode();
        this.genero = genero;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getInformacao_gramatical() {
        return informacao_gramatical;
    }

    public void setInformacao_gramatical(String informacao_gramatical) {
        this.informacao_gramatical = informacao_gramatical;
    }

    public TipoDependenciaCamposTematicos getTipo_dependencia() {
        return TipoDependenciaCamposTematicos.toEnum(tipo_dependencia);
    }

    public void setTipo_dependencia(TipoDependenciaCamposTematicos tipo_dependencia) {
        this.tipo_dependencia = tipo_dependencia.getCode();
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDate getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDate updatedAt) {
        this.updatedAt = updatedAt;
    }
}
