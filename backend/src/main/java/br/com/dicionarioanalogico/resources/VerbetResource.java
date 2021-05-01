package br.com.dicionarioanalogico.resources;

import br.com.dicionarioanalogico.dto.VerbetDTO;
import br.com.dicionarioanalogico.services.VerbetService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/verbetes")
@Api(tags = "Verbetes")
public class VerbetResource {

    @Autowired
    private VerbetService service;

    @GetMapping
    @ApiOperation("Busca todos os Verbetes")
    public ResponseEntity<Page<VerbetDTO>> findAll(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "linesPerPage", defaultValue = "10") Integer linesPerPage,
            @RequestParam(value = "direction", defaultValue = "ASC") String direction,
            @RequestParam(value = "orderBy", defaultValue = "descricao") String orderBy){

        PageRequest pageRequest = PageRequest.of(page, linesPerPage, Sort.Direction.valueOf(direction), orderBy);

        Page<VerbetDTO> list = service.findAllPaged(pageRequest);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "{id}")
    @ApiOperation("Busca um Verbete por ID")
    public ResponseEntity<VerbetDTO> findById(@PathVariable Long id){
        VerbetDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    @ApiOperation("Insere um novo Verbete")
    public ResponseEntity<VerbetDTO> insert(@RequestBody VerbetDTO dto){
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "{id}")
    @ApiOperation("Atualiza um Verbete")
    public ResponseEntity<VerbetDTO> update(@PathVariable Long id, @RequestBody VerbetDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "{id}")
    @ApiOperation("Deleta um Verbete")
    public ResponseEntity<VerbetDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
