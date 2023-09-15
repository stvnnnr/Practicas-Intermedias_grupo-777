package com.grupo777.intermedias.ws;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.grupo777.intermedias.dto.UserDTO;
import com.grupo777.intermedias.entity.CourseStudent;
import com.grupo777.intermedias.entity.Courses;
import com.grupo777.intermedias.entity.Users;
import com.grupo777.intermedias.interfaces.GeneralInterface;
import com.grupo777.intermedias.repository.CourseStudentRepository;
import com.grupo777.intermedias.repository.CoursesRepository;
import com.grupo777.intermedias.repository.UserTypeRepository;
import com.grupo777.intermedias.repository.UsersRepository;
import com.grupo777.intermedias.jwt.JwtTokenInterface;


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
	
	@Autowired
	JwtTokenInterface jwtGenerator;
	
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
	public Users guardarC(Users usuario) {
		return userRepo.save(usuario);
	}

	@Override
	public List<CourseStudent> buscarCursosEstudiante(String id) {
		return courseStuRepo.findByStudentDpiLike(id);
	}

	@Override
	public List<Courses> buscarCursosProfesor(String id) {
		return courseRepo.findByProfessorDpiLike(id);
	}

	@Override
	public ResponseEntity<Object> login(UserDTO usuario) {
		try {
	      if(usuario.getUsername() == null || usuario.getPassword() == null) {
	      return new ResponseEntity<>("Usuario o password vacio.", HttpStatus.BAD_REQUEST);
	      }
			Users usuarioTest = userRepo.findByUserAndPassword(usuario.getUsername(), usuario.getPassword());
			if(usuarioTest == null) {
				return new ResponseEntity<>("Usuario o password invalido.", HttpStatus.BAD_REQUEST);
			}
			usuario.setToken(jwtGenerator.generateToken(usuarioTest));
			usuario.setBirthDate(usuarioTest.getBirthDate());
			usuario.setDpi(usuarioTest.getDpi());
			usuario.setEmail(usuarioTest.getEmail());
			usuario.setLastname(usuarioTest.getLastname());
			usuario.setName(usuarioTest.getName());
			usuario.setPhone(usuarioTest.getPhone());
			usuario.setUserType(usuarioTest.getUserType());
			return new ResponseEntity<>(usuario, HttpStatus.OK);
	    } catch (Exception e) {
	       return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}

}
