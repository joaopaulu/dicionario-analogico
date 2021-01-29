package com.joaopaulu.dicionarioanalogico.services;

import com.joaopaulu.dicionarioanalogico.dto.UserDTO;
import com.joaopaulu.dicionarioanalogico.entities.User;
import com.joaopaulu.dicionarioanalogico.repositories.UserRepository;
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
