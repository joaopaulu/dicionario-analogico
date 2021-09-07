package br.com.dicionarioanalogico.services;

import br.com.dicionarioanalogico.config.Mapper;
import br.com.dicionarioanalogico.dto.AnalogicaDTO;
import br.com.dicionarioanalogico.entities.Analogica;
import br.com.dicionarioanalogico.mappers.AnalogicaMapper;
import br.com.dicionarioanalogico.repositories.AnalogicaRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@AllArgsConstructor
@Service
public class AnalogicaService {

    @Autowired
    private AnalogicaRepository repository;

    @Transactional(readOnly = true)
    public List<AnalogicaDTO> findAll(){
        List<Analogica> list = repository.findAll();
        return Mapper.factory(AnalogicaMapper.class).entityToDtoList(list);
    }
}
