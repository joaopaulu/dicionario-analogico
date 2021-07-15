package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Verbet;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface VerbetRepository extends JpaRepository<Verbet, Long> {
    @Query("SELECT DISTINCT obj FROM Verbet obj  WHERE "
            + "((:temDescricao = false) or (:temDescricao = true AND LOWER(TRANSLATE(obj.descricao, 'ÁÇÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕËÜáçéíóúàèìòùâêîôûãõëü','ACEIOUAEIOUAEIOUAOEUaceiouaeiouaeiouaoeu')) " +
            "LIKE LOWER(CONCAT('%', TRANSLATE(:descricao, 'ÁÇÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕËÜáçéíóúàèìòùâêîôûãõëü','ACEIOUAEIOUAEIOUAOEUaceiouaeiouaeiouaoeu'),'%')))) ")
    Page<Verbet> find(String descricao, Boolean temDescricao, Pageable pageable);
}
