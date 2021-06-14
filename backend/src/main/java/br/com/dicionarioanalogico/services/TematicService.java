package br.com.dicionarioanalogico.services;

import br.com.dicionarioanalogico.dto.TematicDTO;
import br.com.dicionarioanalogico.repositories.TematicRepository;
import br.com.dicionarioanalogico.entities.Tematic;
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
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TematicService {

    @Autowired
    private TematicRepository repository;

    @Transactional(readOnly = true)
    public List<TematicDTO> findAll(){
        List<Tematic> result = repository.findAll();
        return result.stream().map(TematicDTO::new).collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public TematicDTO findById(Long id){
        Optional<Tematic> obj = repository.findById(id);
        Tematic entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
        return new TematicDTO(entity);
    }

    @Transactional
    public TematicDTO insert(TematicDTO dto){
        Tematic entity = new Tematic();
        copyDtoEntity(dto, entity);
        entity = repository.save(entity);
        return new TematicDTO(entity);
    }

    @Transactional
    public TematicDTO update(Long id, TematicDTO dto){
        try {
            Tematic entity = repository.getOne(id);
            copyDtoEntity(dto, entity);
            entity = repository.save(entity);
            return new TematicDTO(entity);
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

    private void copyDtoEntity(TematicDTO dto, Tematic entity) {
        entity.setNome(dto.getNome());
        entity.setDescricao(dto.getDescricao());
        entity.setInformacao_gramatical(dto.getInformacao_gramatical());
        entity.setTipo_dependencia(dto.getTipo_dependencia());
        entity.setGenero(dto.getGenero());
    }
}
