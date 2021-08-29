package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Verbet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VerbetRepository extends JpaRepository<Verbet, Long> {
    @Query("SELECT DISTINCT obj FROM Verbet obj WHERE "
            + "(LOWER(obj.descricao) LIKE LOWER(CONCAT('%',:descricao,'%'))) ")
    Page<Verbet> find(String descricao, Pageable pageable);
}
