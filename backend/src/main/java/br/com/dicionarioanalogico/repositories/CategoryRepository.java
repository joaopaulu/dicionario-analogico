package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    @Query("SELECT DISTINCT obj FROM Category obj WHERE "
            + "(LOWER(obj.descricao) LIKE LOWER(CONCAT('%',:descricao,'%'))) ")
    Page<Category> find(String descricao, Pageable pageable);
}
