package br.com.dicionarioanalogico.resources;

import br.com.dicionarioanalogico.dto.TematicDTO;
import br.com.dicionarioanalogico.services.TematicService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping(value = "/tematics")
@Api(tags = "Campos Tematicos")
public class TematicResource {

    @Autowired
    private TematicService service;

    @GetMapping
    @ApiOperation("Consulta todos campos temáticos")
    public ResponseEntity<Page<TematicDTO>> findAll(
            @RequestParam(value = "nome", defaultValue = "") String nome,
            Pageable pageable) {
        Page<TematicDTO> list = service.findAllPaged(nome.trim(), pageable);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "{id}")
    @ApiOperation("Consulta campos temáticos por código")
    public ResponseEntity<TematicDTO> findById(@PathVariable Long id){
        TematicDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    @ApiOperation("Inserir uma novo campo temático")
    public ResponseEntity<TematicDTO> insert(@RequestBody TematicDTO dto){
        dto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(dto.getId()).toUri();
        return ResponseEntity.created(uri).body(dto);
    }

    @PutMapping(value = "{id}")
    @ApiOperation("Atualizar um campo temático")
    public ResponseEntity<TematicDTO> update(@PathVariable Long id, @RequestBody TematicDTO dto){
        dto.setId(id);
        dto = service.update(id, dto);
        return ResponseEntity.ok().body(dto);
    }

    @DeleteMapping(value = "{id}")
    @ApiOperation("Deletar um campo temático")
    public ResponseEntity<TematicDTO> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}


