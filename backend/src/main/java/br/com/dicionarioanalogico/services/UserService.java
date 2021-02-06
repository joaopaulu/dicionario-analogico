package br.com.dicionarioanalogico.services;

import br.com.dicionarioanalogico.repositories.UserRepository;
import br.com.dicionarioanalogico.dto.UserDTO;
import br.com.dicionarioanalogico.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository repository;

    @Transactional(readOnly = true)
    public Page<UserDTO> findAllPaged(PageRequest pageRequest){
        Page<User> list = repository.findAll(pageRequest);
        return list.map(UserDTO::new);
    }
}
