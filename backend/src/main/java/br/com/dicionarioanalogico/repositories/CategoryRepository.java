package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
