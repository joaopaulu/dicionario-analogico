package com.joaopaulu.dicionarioanalogico.repositories;

import com.joaopaulu.dicionarioanalogico.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
