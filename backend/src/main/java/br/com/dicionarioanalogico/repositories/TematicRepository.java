package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Tematic;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TematicRepository extends JpaRepository<Tematic, Long> {
    @Query("SELECT DISTINCT obj FROM Tematic obj WHERE "
            + "(LOWER(obj.nome) LIKE LOWER(CONCAT('%',:nome,'%'))) ")
    Page<Tematic> find(String nome, Pageable pageable);
}
