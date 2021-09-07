package br.com.dicionarioanalogico.entities;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name="dependencies")
public class Dependency implements Serializable {
    public static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "serial")
    private Long id;

    private String sigla;

    private String descricao;

    public void clear() {
    }

    public void add(Dependency dependency) {
    }
}
