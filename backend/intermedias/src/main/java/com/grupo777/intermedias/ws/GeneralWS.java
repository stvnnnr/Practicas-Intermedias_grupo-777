package com.grupo777.intermedias.ws;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.grupo777.intermedias.entity.CourseStudent;
import com.grupo777.intermedias.entity.Courses;
import com.grupo777.intermedias.entity.UserType;
import com.grupo777.intermedias.entity.Users;
import com.grupo777.intermedias.interfaces.GeneralInterface;
import com.grupo777.intermedias.repository.CourseStudentRepository;
import com.grupo777.intermedias.repository.CoursesRepository;
import com.grupo777.intermedias.repository.UserTypeRepository;
import com.grupo777.intermedias.repository.UsersRepository;

@Component
public class GeneralWS implements GeneralInterface{

	@Autowired
	CoursesRepository courseRepo;
	
	@Autowired
	CourseStudentRepository courseStuRepo;
	
	@Autowired
	UsersRepository userRepo;
	
	@Autowired
	UserTypeRepository typeRepo;
	
	@Override
	public List<Courses> buscarCursos() {
		return courseRepo.findAll();
	}

	@Override
	public List<CourseStudent> buscarCursosEstudiante() {
		return courseStuRepo.findAll();
	}

	@Override
	public List<Users> buscarUsuarios() {
		return userRepo.findAll();
	}

	@Override
	public List<UserType> buscarTipos() {
		return typeRepo.findAll();
	}

	@Override
	public Courses guardarCurso(Courses curso) {
		return courseRepo.save(curso);
	}

	@Override
	public Users guardarC(Users usuario) {
		return userRepo.save(usuario);
	}

}
