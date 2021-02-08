package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Equivalent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EquivalentRepository extends JpaRepository<Equivalent, Long> {
}
