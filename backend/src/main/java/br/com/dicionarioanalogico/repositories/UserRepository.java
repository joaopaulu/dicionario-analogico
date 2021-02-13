package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String name);
}
