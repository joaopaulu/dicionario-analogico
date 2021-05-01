package br.com.dicionarioanalogico.services;

import br.com.dicionarioanalogico.repositories.ArticleRepository;
import br.com.dicionarioanalogico.dto.ArticleDTO;
import br.com.dicionarioanalogico.entities.Article;
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
public class ArticleService {

    @Autowired
    private ArticleRepository repository;

    @Transactional(readOnly = true)
    public Page<ArticleDTO> findAllPaged(PageRequest pageRequest){
        Page<Article> list = repository.findAll(pageRequest);
        return  list.map(ArticleDTO::new);
    }

    @Transactional(readOnly = true)
    public ArticleDTO findById(Long id){
        Optional<Article> obj = repository.findById(id);
        Article entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not Found"));
        return new ArticleDTO(entity);
    }

    @Transactional
    public ArticleDTO insert(ArticleDTO dto){
        Article entity = new Article();
        copyDtoEntity(dto, entity);
        entity = repository.save(entity);
        return new ArticleDTO(entity);
    }

    @Transactional
    public ArticleDTO update(Long id, ArticleDTO dto){
        try {
            Article entity = repository.getOne(id);
            copyDtoEntity(dto, entity);
            entity = repository.save(entity);
            return new ArticleDTO(entity);
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

    private void copyDtoEntity(ArticleDTO dto, Article entity) {
        entity.setTitle(dto.getTitle());
        entity.setIntro(dto.getTitle());
        entity.setContent(dto.getContent());
    }
}
