package br.com.dicionarioanalogico.services;

import br.com.dicionarioanalogico.config.Mapper;
import br.com.dicionarioanalogico.dto.VerbetDTO;
import br.com.dicionarioanalogico.dto.VerbetDescricaoDTO;
import br.com.dicionarioanalogico.entities.Verbet;
import br.com.dicionarioanalogico.mappers.VerbetMapper;
import br.com.dicionarioanalogico.repositories.VerbetRepository;
import br.com.dicionarioanalogico.services.exceptions.DataBaseException;
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
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class VerbetService {

    @Autowired
    private VerbetRepository repository;

    @Transactional(readOnly = true)
    public Page<VerbetDTO> findAllPaged(String descricao, Pageable pageable){
        Page<Verbet> list = repository.find(descricao, pageable);
        var listConvert = Mapper.factory(VerbetMapper.class).entityToDtoList(list.toList());
        return new PageImpl<VerbetDTO>(listConvert, list.getPageable(), list.getTotalElements());
    }

    @Transactional(readOnly = true)
    public List<VerbetDescricaoDTO> findVerbete(Integer dependente, Long tpDependencia){
        List<VerbetDescricaoDTO> list = repository.findVerbetDescricao(dependente, tpDependencia);
        return list;
    }

    @Transactional(readOnly = true)
    public VerbetDTO findById(Long id) {
        Optional<Verbet> obj = repository.findById(id);
        Verbet entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
        return Mapper.factory(VerbetMapper.class).entityToDto(entity);
    }

    @Transactional
    public VerbetDTO insert(VerbetDTO dto) {
        Verbet entity = Mapper.factory(VerbetMapper.class).dtoToEntity(dto);
        entity = repository.save(entity);
        return Mapper.factory(VerbetMapper.class).entityToDto(entity);

    }

    @Transactional
    public VerbetDTO update(Long id, VerbetDTO dto) {
        try {
            Verbet entity = Mapper.factory(VerbetMapper.class).dtoToEntity(dto);
            entity = repository.save(entity);
            return Mapper.factory(VerbetMapper.class).entityToDto(entity);
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
            throw new DataBaseException("Integrity violation");
        }
    }

}
