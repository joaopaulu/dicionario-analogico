package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.dto.VerbetDTO;
import br.com.dicionarioanalogico.dto.VerbetDescricaoDTO;
import br.com.dicionarioanalogico.entities.Verbet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VerbetRepository extends JpaRepository<Verbet, Long> {
    @Query("SELECT DISTINCT obj FROM Verbet obj WHERE "
            + "(LOWER(obj.descricao) LIKE LOWER(CONCAT('%',:descricao,'%'))) ")
    Page<Verbet> find(String descricao, Pageable pageable);

    @Query("SELECT new br.com.dicionarioanalogico.dto.VerbetDescricaoDTO(obj.id, obj.descricao) " +
            "FROM Verbet obj WHERE "
            + "obj.dependente = :dependente and obj.tipoDependencia.id = :tpDependencia " +
            " ORDER BY obj.descricao ")
    List<VerbetDescricaoDTO> findVerbetDescricao(Integer dependente, Long tpDependencia);
}
