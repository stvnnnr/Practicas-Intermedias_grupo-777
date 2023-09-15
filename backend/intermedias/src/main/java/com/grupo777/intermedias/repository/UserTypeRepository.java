package com.grupo777.intermedias.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.grupo777.intermedias.entity.UserType;

@Repository("UserTypeRepository")
public interface UserTypeRepository extends JpaRepository<UserType, Integer>{

}
