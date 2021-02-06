package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Field;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FieldRepository extends JpaRepository<Field, Long> {
}
