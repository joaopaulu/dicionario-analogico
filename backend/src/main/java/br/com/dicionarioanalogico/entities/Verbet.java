package br.com.dicionarioanalogico.entities;

import br.com.dicionarioanalogico.entities.enums.TipoDependenciaVerbetes;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="verbetes")
public class Verbet implements Serializable {
    public static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String descricao;

    private String separacaoSilabica;

    private String pronuncia;

    private String genero;

    private String transitividadeVerbal;

    private String variantes;

    @Column(columnDefinition = "TEXT")
    private String definicao;

    private String fonteDefinicao;

    private String abvFonteContexto;

    private String notas;

    private String fonteNota;

    private String autor;

    private String abvAutor;

    private String fraseologia;

    private LocalDate data;

    @Column(columnDefinition = "TEXT")
    private String ilustracao;

    private Long dependente;

    private Integer tipoDependencia;

    private String equiEspanhol;

    private String equiFrances;

    private String equiIngles;

    private String equiItaliano;

    private String equiJapones;

    private String equiLibras;

    @ManyToOne
    @JoinColumn(name = "campo_tematico_id")
    private Tematic campoTematico;

    @ManyToOne
    @JoinColumn(name = "user_id_created")
    private User userCreated;

    @ManyToOne
    @JoinColumn(name = "user_id_modified")
    private User userModified;

    @ManyToMany
    @JoinTable(name="categorias_has_verbetes",
            joinColumns = @JoinColumn(name= "verbete_id"),
            inverseJoinColumns = @JoinColumn(name = "categoria_gramatical_id"))
    Set<Category> categories = new HashSet<>();

    @CreationTimestamp
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private LocalDate createdAt;

    @UpdateTimestamp
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private LocalDate updatedAt;

    public Verbet() {
    }

    public Verbet(Long id, String descricao, String separacaoSilabica, String pronuncia, String genero, String transitividadeVerbal, String variantes, String definicao, String fonteDefinicao, String abvFonteContexto, String notas, String fonteNota, String autor, String abvAutor, String fraseologia, LocalDate data, String ilustracao, Long dependente, TipoDependenciaVerbetes tipoDependencia, String equiEspanhol, String equiFrances, String equiIngles, String equiItaliano, String equiJapones, String equiLibras, Set<Tematic> tematics, User userCreated, User userModified, Set<Category> categories, LocalDate createdAt, LocalDate updatedAt) {
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
        this.tipoDependencia = tipoDependencia.getCode();
        this.equiEspanhol = equiEspanhol;
        this.equiFrances = equiFrances;
        this.equiIngles = equiIngles;
        this.equiItaliano = equiItaliano;
        this.equiJapones = equiJapones;
        this.equiLibras = equiLibras;
        this.userCreated = userCreated;
        this.userModified = userModified;
        this.categories = categories;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getSeparacaoSilabica() {
        return separacaoSilabica;
    }

    public void setSeparacaoSilabica(String separacaoSilabica) {
        this.separacaoSilabica = separacaoSilabica;
    }

    public String getPronuncia() {
        return pronuncia;
    }

    public void setPronuncia(String pronuncia) {
        this.pronuncia = pronuncia;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getTransitividadeVerbal() {
        return transitividadeVerbal;
    }

    public void setTransitividadeVerbal(String transitividadeVerbal) {
        this.transitividadeVerbal = transitividadeVerbal;
    }

    public String getVariantes() {
        return variantes;
    }

    public void setVariantes(String variantes) {
        this.variantes = variantes;
    }

    public String getDefinicao() {
        return definicao;
    }

    public void setDefinicao(String definicao) {
        this.definicao = definicao;
    }

    public String getFonteDefinicao() {
        return fonteDefinicao;
    }

    public void setFonteDefinicao(String fonteDefinicao) {
        this.fonteDefinicao = fonteDefinicao;
    }

    public String getAbvFonteContexto() {
        return abvFonteContexto;
    }

    public void setAbvFonteContexto(String abvFonteContexto) {
        this.abvFonteContexto = abvFonteContexto;
    }

    public String getNotas() {
        return notas;
    }

    public void setNotas(String notas) {
        this.notas = notas;
    }

    public String getFonteNota() {
        return fonteNota;
    }

    public void setFonteNota(String fonteNota) {
        this.fonteNota = fonteNota;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public String getAbvAutor() {
        return abvAutor;
    }

    public void setAbvAutor(String abvAutor) {
        this.abvAutor = abvAutor;
    }

    public String getFraseologia() {
        return fraseologia;
    }

    public void setFraseologia(String fraseologia) {
        this.fraseologia = fraseologia;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public String getIlustracao() {
        return ilustracao;
    }

    public void setIlustracao(String ilustracao) {
        this.ilustracao = ilustracao;
    }

    public Long getDependente() {
        return dependente;
    }

    public void setDependente(Long dependente) {
        this.dependente = dependente;
    }

    public TipoDependenciaVerbetes getTipoDependencia() {
        return TipoDependenciaVerbetes.toEnum(tipoDependencia);
    }

    public void setTipoDependencia(TipoDependenciaVerbetes tipoDependencia) {
        this.tipoDependencia = tipoDependencia.getCode();
    }

    public String getEquiEspanhol() {
        return equiEspanhol;
    }

    public void setEquiEspanhol(String equiEspanhol) {
        this.equiEspanhol = equiEspanhol;
    }

    public String getEquiFrances() {
        return equiFrances;
    }

    public void setEquiFrances(String equiFrances) {
        this.equiFrances = equiFrances;
    }

    public String getEquiIngles() {
        return equiIngles;
    }

    public void setEquiIngles(String equiIngles) {
        this.equiIngles = equiIngles;
    }

    public String getEquiItaliano() {
        return equiItaliano;
    }

    public void setEquiItaliano(String equiItaliano) {
        this.equiItaliano = equiItaliano;
    }

    public String getEquiJapones() {
        return equiJapones;
    }

    public void setEquiJapones(String equiJapones) {
        this.equiJapones = equiJapones;
    }

    public String getEquiLibras() {
        return equiLibras;
    }

    public void setEquiLibras(String equiLibras) {
        this.equiLibras = equiLibras;
    }

    public void setUserCreated(User userCreated) {
        this.userCreated = userCreated;
    }

    public User getUserModified() {
        return userModified;
    }

    public void setUserModified(User userModified) {
        this.userModified = userModified;
    }

    public Set<Category> getCategories() {
        return categories;
    }

    public void setCategories(Set<Category> categories) {
        this.categories = categories;
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
