package br.com.dicionarioanalogico.resources;

import br.com.dicionarioanalogico.dto.CategoryDTO;
import br.com.dicionarioanalogico.dto.DependencyDTO;
import br.com.dicionarioanalogico.dto.VerbetDTO;
import br.com.dicionarioanalogico.entities.Dependency;
import br.com.dicionarioanalogico.repositories.DependencyRepository;
import br.com.dicionarioanalogico.services.DependencyService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/dependencies")
@Api(tags = "dependencies")
public class DependencyResource {

    @Autowired
    private DependencyService service;

    @Autowired
    private DependencyRepository repository;

    @GetMapping
    @ApiOperation("Busca todos os dependencies")
    public ResponseEntity<Page<DependencyDTO>> findAll(
            @RequestParam(value = "descricao", defaultValue = "") String descricao,
            Pageable pageable) {
        Page<DependencyDTO> list = service.findAllPaged(descricao.trim(), pageable);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "{id}")
    @ApiOperation("Busca um Dependencia por ID")
    public ResponseEntity<DependencyDTO> findById(@PathVariable Long id){
        DependencyDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    @ApiOperation("Insere um novo Dependencia")
    public ResponseEntity<DependencyDTO> insert(@RequestBody DependencyDTO dto){
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "{id}")
    @ApiOperation("Atualiza um Dependencia")
    public ResponseEntity<DependencyDTO> update(@PathVariable Long id, @RequestBody DependencyDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "{id}")
    @ApiOperation("Deleta um Dependencia")
    public ResponseEntity<DependencyDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
