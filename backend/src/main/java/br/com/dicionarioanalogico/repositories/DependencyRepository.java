package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Dependency;
import br.com.dicionarioanalogico.entities.Verbet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DependencyRepository extends JpaRepository<Dependency, Long> {
    @Query("SELECT DISTINCT obj FROM Dependency obj WHERE "
            + "(LOWER(obj.descricao) LIKE LOWER(CONCAT('%',:descricao,'%'))) ")
    Page<Dependency> find(String descricao, Pageable pageable);
}
