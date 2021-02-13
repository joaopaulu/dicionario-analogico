package br.com.dicionarioanalogico.services.iface;

import br.com.dicionarioanalogico.dto.UserDTO;
import br.com.dicionarioanalogico.dto.UserInsertDTO;
import br.com.dicionarioanalogico.dto.UserUpdateDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

public interface IUserService {

    Page<UserDTO> findAllPaged(PageRequest pageRequest);

    UserDTO findById(Long id);

    UserDTO insert(UserInsertDTO dto);

    UserDTO update(Long id, UserUpdateDTO dto);

    void delete(Long id);
}
