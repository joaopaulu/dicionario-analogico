package br.com.dicionarioanalogico.resources;

import br.com.dicionarioanalogico.dto.UserDTO;
import br.com.dicionarioanalogico.dto.UserInsertDTO;
import br.com.dicionarioanalogico.dto.UserUpdateDTO;
import br.com.dicionarioanalogico.services.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.validation.Valid;
import java.net.URI;

@RestController
@RequestMapping(value = "/users")
@Api(tags = "Usuários")
public class UserResource {

    @Autowired
    private UserService service;

    @GetMapping
    @ApiOperation("Busca todos os usuários")
    public ResponseEntity<Page<UserDTO>> findAll(
            @RequestParam(value = "name", defaultValue = "") String name,
            Pageable pageable) {
        Page<UserDTO> list = service.findAllPaged(name.trim(), pageable);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "{id}")
    @ApiOperation("Consulta usuário por ID")
    public ResponseEntity<UserDTO> findById(@PathVariable Long id){
        UserDTO dto = service.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @PostMapping
    @ApiOperation("Cadastra um usuário")
    public ResponseEntity<UserDTO> insert(@Valid @RequestBody UserInsertDTO dto){
        UserDTO newDto = service.insert(dto);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newDto.getId()).toUri();
        return ResponseEntity.created(uri).body(newDto);
    }

    @PutMapping(value = "{id}")
    @ApiOperation("Atualiza um usuário")
    public ResponseEntity<UserDTO> update(@PathVariable Long id, @Valid @RequestBody UserUpdateDTO dto){
        UserDTO newDto = service.update(id, dto);
        return ResponseEntity.ok().body(newDto);
    }

}
