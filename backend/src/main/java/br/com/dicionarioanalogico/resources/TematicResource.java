package br.com.dicionarioanalogico.resources;

import br.com.dicionarioanalogico.dto.TematicDTO;
import br.com.dicionarioanalogico.services.TematicService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/tematics")
@Api(tags = "Campos Temáticos")
public class TematicResource {

    @Autowired
    private TematicService service;

    @GetMapping
    @ApiOperation("Busca todos os Campos Temáticos")
    public ResponseEntity<List<TematicDTO>> findAll(){
        List<TematicDTO> list = service.findAll();
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
