package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.Verbet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerbetRepository extends JpaRepository<Verbet, Long> {
}
