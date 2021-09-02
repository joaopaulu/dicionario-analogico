package br.com.dicionarioanalogico.services;

import br.com.dicionarioanalogico.config.Mapper;
import br.com.dicionarioanalogico.dto.TematicDTO;
import br.com.dicionarioanalogico.entities.Tematic;
import br.com.dicionarioanalogico.mappers.TematicMapper;
import br.com.dicionarioanalogico.repositories.TematicRepository;
import br.com.dicionarioanalogico.services.exceptions.DataBaseException;
import br.com.dicionarioanalogico.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class TematicService {

    @Autowired
    private TematicRepository repository;

    @Transactional(readOnly = true)
    public Page<TematicDTO> findAllPaged(Pageable pageable) {
        Page<Tematic> list = repository.findAll(pageable);
        var listConvert = Mapper.factory(TematicMapper.class).entityToDtoList(list.toList());
        return new PageImpl<TematicDTO>(listConvert, list.getPageable(), list.getTotalElements());
    }

    @Transactional(readOnly = true)
    public TematicDTO findById(Long id){
        Optional<Tematic> obj = repository.findById(id);
        Tematic entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
        return Mapper.factory(TematicMapper.class).entityToDto(entity);
    }

    @Transactional
    public TematicDTO insert(TematicDTO dto){
        Tematic entity = Mapper.factory(TematicMapper.class).dtoToEntity(dto);
        entity = repository.save(entity);
        return Mapper.factory(TematicMapper.class).entityToDto(entity);
    }

    @Transactional
    public TematicDTO update(Long id, TematicDTO dto){
        try {
            Tematic entity = Mapper.factory(TematicMapper.class).dtoToEntity(dto);
            entity = repository.save(entity);
            return Mapper.factory(TematicMapper.class).entityToDto(entity);
        }catch (EntityNotFoundException e){
            throw new ResourceNotFoundException("Id not found " + id);
        }
    }

    public void delete(Long id){
        try {
            repository.deleteById(id);
        }catch (EmptyResultDataAccessException e){
            throw new ResourceNotFoundException("Id not found " + id);
        }catch (DataIntegrityViolationException e) {
            throw new DataBaseException("Integrity violation");
        }
    }

}
