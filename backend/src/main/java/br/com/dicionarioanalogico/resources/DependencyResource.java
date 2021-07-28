package br.com.dicionarioanalogico.resources;

import br.com.dicionarioanalogico.dto.DependencyDTO;
import br.com.dicionarioanalogico.dto.VerbetDTO;
import br.com.dicionarioanalogico.services.DependencyService;
import br.com.dicionarioanalogico.services.VerbetService;
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

@RestController
@RequestMapping(value = "/dependencies")
@Api(tags = "dependencies")
public class DependencyResource {

    @Autowired
    private DependencyService service;

    @GetMapping
    @ApiOperation("Busca todos os dependencies")
    public ResponseEntity<Page<DependencyDTO>> findAll(Pageable pageable) {
        Page<DependencyDTO> list = service.findAllPaged(pageable);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "{id}")
    @ApiOperation("Busca um Verbete por ID")
    public ResponseEntity<DependencyDTO> findById(@PathVariable Long id){
        DependencyDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    @ApiOperation("Insere um novo Verbete")
    public ResponseEntity<DependencyDTO> insert(@RequestBody DependencyDTO dto){
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "{id}")
    @ApiOperation("Atualiza um Verbete")
    public ResponseEntity<DependencyDTO> update(@PathVariable Long id, @RequestBody DependencyDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "{id}")
    @ApiOperation("Deleta um Verbete")
    public ResponseEntity<DependencyDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
