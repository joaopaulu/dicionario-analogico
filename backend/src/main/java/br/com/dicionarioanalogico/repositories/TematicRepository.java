package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Tematic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TematicRepository extends JpaRepository<Tematic, Long> {
}
