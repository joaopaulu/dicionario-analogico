package br.com.dicionarioanalogico.services;

import br.com.dicionarioanalogico.dto.VerbetDTO;
import br.com.dicionarioanalogico.entities.Verbet;
import br.com.dicionarioanalogico.repositories.VerbetRepository;
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
public class VerbetService {

    @Autowired
    private VerbetRepository repository;

    @Transactional(readOnly = true)
    public Page<VerbetDTO> findAllPaged(PageRequest pageRequest, String descricao){
        var temDescricao = Boolean.FALSE;
        if (descricao != null && descricao.length() > 0){
            temDescricao =   Boolean.TRUE;
        }

        Page<Verbet> list = repository.find(descricao, temDescricao, pageRequest);
        return list.map(VerbetDTO::new);
    }

    @Transactional(readOnly = true)
    public VerbetDTO findById(Long id){
        Optional<Verbet> obj = repository.findById(id);
        Verbet entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
        return new VerbetDTO(entity);
    }

    @Transactional
    public VerbetDTO insert(VerbetDTO dto){
        Verbet entity = new Verbet();
        copyDtoEntity(dto, entity);
        entity = repository.save(entity);
        return new VerbetDTO(entity);
    }

    @Transactional
    public VerbetDTO update(Long id, VerbetDTO dto){
        try {
            Verbet entity = repository.getOne(id);
            copyDtoEntity(dto, entity);
            entity = repository.save(entity);
            return new VerbetDTO(entity);
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

    private void copyDtoEntity(VerbetDTO dto, Verbet entity) {
        entity.setDescricao(dto.getDescricao());
        entity.setSeparacaoSilabica(dto.getSeparacaoSilabica());
        entity.setPronuncia(dto.getPronuncia());
        entity.setTransitividadeVerbal(dto.getTransitividadeVerbal());
        entity.setGenero(dto.getGenero());
        entity.setVariantes(dto.getVariantes());
        entity.setDefinicao(dto.getDefinicao());
        entity.setFonteDefinicao(dto.getFonteDefinicao());
        entity.setAbvFonteContexto(dto.getAbvFonteContexto());
        entity.setNotas(dto.getNotas());
        entity.setFonteNota(dto.getFonteNota());
        entity.setAutor(dto.getAutor());
        entity.setAbvAutor(dto.getAbvAutor());
        entity.setFraseologia(dto.getFraseologia());
        entity.setData(dto.getData());
        entity.setIlustracao(dto.getIlustracao());
        entity.setDependente(dto.getDependente());
        entity.setTipoDependencia(dto.getTipoDependencia());
        entity.setEquiEspanhol(dto.getEquiEspanhol());
        entity.setEquiFrances(dto.getEquiFrances());
        entity.setEquiIngles(dto.getEquiIngles());
        entity.setEquiItaliano(dto.getEquiItaliano());
        entity.setEquiJapones(dto.getEquiJapones());
        entity.setEquiLibras(dto.getEquiLibras());
    }
}
