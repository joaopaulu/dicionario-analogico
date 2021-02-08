package br.com.dicionarioanalogico.services;

import br.com.dicionarioanalogico.dto.EquivalentDTO;
import br.com.dicionarioanalogico.entities.Equivalent;
import br.com.dicionarioanalogico.repositories.EquivalentRepository;
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
public class EquivalentService {

    @Autowired
    private EquivalentRepository repository;

    @Transactional(readOnly = true)
    public Page<EquivalentDTO> findAllPaged(PageRequest pageRequest){
        Page<Equivalent> list = repository.findAll(pageRequest);
        return list.map(EquivalentDTO::new);
    }

    @Transactional(readOnly = true)
    public EquivalentDTO findById(Long id){
        Optional<Equivalent> obj = repository.findById(id);
        Equivalent entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
        return new EquivalentDTO(entity);
    }

    @Transactional
    public EquivalentDTO insert(EquivalentDTO dto){
        Equivalent entity = new Equivalent();
        copyDtoEntity(dto, entity);
        entity = repository.save(entity);
        return new EquivalentDTO(entity);
    }

    @Transactional
    public EquivalentDTO update(Long id, EquivalentDTO dto){
        try {
            Equivalent entity = repository.getOne(id);
            copyDtoEntity(dto, entity);
            entity = repository.save(entity);
            return new EquivalentDTO(entity);
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

    private void copyDtoEntity(EquivalentDTO dto, Equivalent entity) {
        entity.setDescricao(dto.getDescricao());
    }
}
