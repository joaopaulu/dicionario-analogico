package br.com.dicionarioanalogico.entities;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Table(name = "verbetes")
public class Verbet implements Serializable {
    public static final long serialVersionUID = 1L;

    @Id
    @EqualsAndHashCode.Include
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

    private Integer dependente;

    private String equiEspanhol;

    private String equiFrances;

    private String equiIngles;

    private String equiItaliano;

    private String equiJapones;

    private String equiLibras;

    @Column(name = "user_id_created", insertable = false, updatable = false)
    private Integer userIdCreated;

    @ManyToOne
    @JoinColumn(name = "campo_tematico_id", referencedColumnName = "id")
    private Tematic tematics;

    @ManyToOne
    @JoinColumn(name = "tipo_dependencia", referencedColumnName = "id")
    private Dependency tipoDependencia;

    @ManyToOne
    @JoinColumn(name = "user_id_created", referencedColumnName = "id")
    private User userCreated;

    @ManyToOne
    @JoinColumn(name = "user_id_modified", referencedColumnName = "id")
    private User userModified;

    @ManyToMany
    @JoinTable(name = "categorias_has_verbetes",
            joinColumns = @JoinColumn(name = "verbete_id"),
            inverseJoinColumns = @JoinColumn(name = "categoria_gramatical_id"))
    Set<Category> categories = new HashSet<>();

    @CreationTimestamp
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private LocalDate createdAt;

    @UpdateTimestamp
    @Column(columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
    private LocalDate updatedAt;

}
