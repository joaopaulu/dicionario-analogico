package br.com.dicionarioanalogico.mappers;

import br.com.dicionarioanalogico.dto.AnalogicaDTO;
import br.com.dicionarioanalogico.entities.Analogica;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface AnalogicaMapper {
    List<AnalogicaDTO> entityToDtoList(List<Analogica> entities);

    AnalogicaDTO entityToDto(Analogica entity);

    Analogica dtoToEntity(AnalogicaDTO dto);
}
