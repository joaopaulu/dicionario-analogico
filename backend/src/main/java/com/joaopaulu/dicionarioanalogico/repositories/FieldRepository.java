package com.joaopaulu.dicionarioanalogico.repositories;

import com.joaopaulu.dicionarioanalogico.entities.Field;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FieldRepository extends JpaRepository<Field, Long> {
}
