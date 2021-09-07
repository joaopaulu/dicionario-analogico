package br.com.dicionarioanalogico.resources;

import br.com.dicionarioanalogico.dto.AnalogicaDTO;
import br.com.dicionarioanalogico.dto.VerbetDTO;
import br.com.dicionarioanalogico.services.AnalogicaService;
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
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(value = "/analogicas")
public class AnalogicaResource {

    @Autowired
    private AnalogicaService service;

    @GetMapping
    public ResponseEntity<List<AnalogicaDTO>> findAll() {
        List<AnalogicaDTO> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }
}
