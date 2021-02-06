package br.com.dicionarioanalogico.services;

import br.com.dicionarioanalogico.dto.FieldDTO;
import br.com.dicionarioanalogico.repositories.FieldRepository;
import br.com.dicionarioanalogico.entities.Field;
import br.com.dicionarioanalogico.services.exceptions.DatabaseException;
import br.com.dicionarioanalogico.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.Optional;

@Service
public class FieldService {

    @Autowired
    private FieldRepository repository;

    @Transactional(readOnly = true)
    public Page<FieldDTO> findAllPaged(PageRequest pageRequest){
        Page<Field> list = repository.findAll(pageRequest);
        return  list.map(FieldDTO::new);
    }

    @Transactional(readOnly = true)
    public FieldDTO findById(Long id){
        Optional<Field> obj = repository.findById(id);
        Field entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
        return new FieldDTO(entity);
    }

    @Transactional
    public FieldDTO insert(FieldDTO dto){
        Field entity = new Field();
        copyDtoEntity(dto, entity);
        entity = repository.save(entity);
        return new FieldDTO(entity);
    }

    @Transactional
    public FieldDTO update(Long id, FieldDTO dto){
        try {
            Field entity = repository.getOne(id);
            copyDtoEntity(dto, entity);
            entity = repository.save(entity);
            return new FieldDTO(entity);
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
            throw new DatabaseException("Integrity violation");
        }
    }

    private void copyDtoEntity(FieldDTO dto, Field entity) {
        entity.setNome(dto.getNome());
        entity.setDescricao(dto.getDescricao());
        entity.setInformacao_gramatical(dto.getInformacao_gramatical());
        entity.setTipo_dependencia(dto.getTipo_dependencia());
        entity.setGenero(dto.getGenero());
    }
}
