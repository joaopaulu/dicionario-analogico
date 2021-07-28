package br.com.dicionarioanalogico.mappers;

import br.com.dicionarioanalogico.dto.DependencyDTO;
import br.com.dicionarioanalogico.entities.Dependency;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DependencyMapper {
    List<DependencyDTO> entityToDtoList(List<Dependency> entities);

    DependencyDTO entityToDto(Dependency entity);

    Dependency dtoToEntity(DependencyDTO dto);
}
