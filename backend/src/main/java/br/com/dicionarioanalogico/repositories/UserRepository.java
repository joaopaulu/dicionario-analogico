package br.com.dicionarioanalogico.repositories;

import br.com.dicionarioanalogico.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String name);

    @Query("SELECT DISTINCT obj FROM User obj WHERE "
            + "(LOWER(obj.name) LIKE LOWER(CONCAT('%',:name,'%'))) ")
    Page<User> find(String name, Pageable pageable);
}
