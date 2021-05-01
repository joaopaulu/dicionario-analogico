package br.com.dicionarioanalogico.resources;

import br.com.dicionarioanalogico.dto.TematicDTO;
import br.com.dicionarioanalogico.services.TematicService;
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
@RequestMapping(value = "/tematics")
@Api(tags = "Campos Temáticos")
public class TematicResource {

    @Autowired
    private TematicService service;

    @GetMapping
    @ApiOperation("Busca todos os Campos Temáticos")
    public ResponseEntity<Page<TematicDTO>> findAll(
            @RequestParam(value = "page", defaultValue = "0") Integer page,
            @RequestParam(value = "linesPerPage", defaultValue = "10") Integer linesPerPage,
            @RequestParam(value = "direction", defaultValue = "ASC") String direction,
            @RequestParam(value = "orderBy", defaultValue = "nome") String orderBy){

        PageRequest pageRequest = PageRequest.of(page, linesPerPage, Sort.Direction.valueOf(direction), orderBy);

        Page<TematicDTO> list = service.findAllPaged(pageRequest);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "{id}")
    @ApiOperation("Busca os Campo Temático por ID")
    public ResponseEntity<TematicDTO> findById(@PathVariable Long id){
        TematicDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    @ApiOperation("Insere um novo Campo Temático")
    public ResponseEntity<TematicDTO> insert(@RequestBody TematicDTO dto){
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "{id}")
    @ApiOperation("Atualiza um novo Campo Temático")
    public ResponseEntity<TematicDTO> update(@PathVariable Long id, @RequestBody TematicDTO dto){
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "{id}")
    @ApiOperation("Deleta um novo Campo Temático")
    public ResponseEntity<TematicDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
