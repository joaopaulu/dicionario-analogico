package br.com.dicionarioanalogico.mappers;

import br.com.dicionarioanalogico.dto.TematicDTO;
import br.com.dicionarioanalogico.entities.Tematic;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface TematicMapper {
    List<TematicDTO> entityToDtoList(List<Tematic> entities);

    TematicDTO entityToDto(Tematic entity);

    Tematic dtoToEntity(TematicDTO dto);
}
