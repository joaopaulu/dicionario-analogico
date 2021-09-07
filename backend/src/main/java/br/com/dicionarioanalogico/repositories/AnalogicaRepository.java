package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Analogica;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AnalogicaRepository extends JpaRepository<Analogica, Long> {
   /* @Query("SELECT obj.descricao FROM Verbet obj WHERE "
            + "obj.dependente = :dependente ")
    Page<Analogica> find(String dependente, Pageable pageable);*/
}
