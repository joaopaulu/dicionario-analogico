package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Dependency;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DependencyRepository extends JpaRepository<Dependency, Long> {
}
