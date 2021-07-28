package br.com.dicionarioanalogico.services;

import br.com.dicionarioanalogico.config.Mapper;
import br.com.dicionarioanalogico.dto.DependencyDTO;
import br.com.dicionarioanalogico.dto.VerbetDTO;
import br.com.dicionarioanalogico.entities.Dependency;
import br.com.dicionarioanalogico.entities.Verbet;
import br.com.dicionarioanalogico.mappers.DependencyMapper;
import br.com.dicionarioanalogico.mappers.VerbetMapper;
import br.com.dicionarioanalogico.repositories.DependencyRepository;
import br.com.dicionarioanalogico.repositories.VerbetRepository;
import br.com.dicionarioanalogico.services.exceptions.DatabaseException;
import br.com.dicionarioanalogico.services.exceptions.ResourceNotFoundException;
import lombok.AllArgsConstructor;
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

@AllArgsConstructor
@Service
public class DependencyService {

    @Autowired
    private DependencyRepository repository;

    @Transactional(readOnly = true)
    public Page<DependencyDTO> findAllPaged(Pageable pageable){
        Page<Dependency> list = repository.findAll(pageable);
        var listConvert = Mapper.factory(DependencyMapper.class).entityToDtoList(list.toList());
        return new PageImpl<DependencyDTO>(listConvert, list.getPageable(), list.getTotalElements());
    }

    @Transactional(readOnly = true)
    public DependencyDTO findById(Long id) {
        Optional<Dependency> obj = repository.findById(id);
        Dependency entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return Mapper.factory(DependencyMapper.class).entityToDto(entity);
    }

    @Transactional
    public DependencyDTO insert(DependencyDTO dto) {
        Dependency entity = Mapper.factory(DependencyMapper.class).dtoToEntity(dto);
        entity = repository.save(entity);
        return Mapper.factory(DependencyMapper.class).entityToDto(entity);
    }

    @Transactional
    public DependencyDTO update(Long id, DependencyDTO dto) {
        try {
            Dependency entity = Mapper.factory(DependencyMapper.class).dtoToEntity(dto);
            entity = repository.save(entity);
            return Mapper.factory(DependencyMapper.class).entityToDto(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("Id não encontrado " + id);
        }
    }

    public void delete(Long id){
        try {
            repository.deleteById(id);
        }catch (EmptyResultDataAccessException e){
            throw new ResourceNotFoundException("Id not found " + id);
        }catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integrity violation");
        }
    }

}
