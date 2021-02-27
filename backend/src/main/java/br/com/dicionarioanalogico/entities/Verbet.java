package br.com.dicionarioanalogico.entities;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Data
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

    private Long tipoDependencia;

    private String equiEspanhol;

    private String equiFrances;

    private String equiIngles;

    private String equiItaliano;

    private String equiJapones;

    private String equiLibras;

    @ManyToOne
    @JoinColumn(name = "campo_tematico_id")
    private Tematic tematic;

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


}
