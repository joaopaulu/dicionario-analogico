package br.com.dicionarioanalogico.mappers;

import br.com.dicionarioanalogico.dto.VerbetDTO;
import br.com.dicionarioanalogico.entities.Verbet;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface VerbetMapper {
    List<VerbetDTO> entityToDtoList(List<Verbet> entities);

    VerbetDTO entityToDto(Verbet entity);

    Verbet dtoToEntity(VerbetDTO dto);
}
