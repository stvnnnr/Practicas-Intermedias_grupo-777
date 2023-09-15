package com.grupo777.intermedias.interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo777.intermedias.dto.UserDTO;
import com.grupo777.intermedias.entity.CourseStudent;
import com.grupo777.intermedias.entity.Courses;
import com.grupo777.intermedias.entity.Users;

@RestController
@RequestMapping("/intermedias")
@CrossOrigin
public interface GeneralInterface {
	
	@GetMapping("/auth/buscarCursos")
	public List<Courses> buscarCursos();
	
	@GetMapping("/auth/buscarCursosEstudiante")
	public List<CourseStudent> buscarCursosEstudiante();
	
	@GetMapping("/auth/buscarUsuarios")
	public List<Users> buscarUsuarios();

	@PostMapping("/auth/guardarUsuario")
	public Users guardarC(@RequestBody Users usuario);
	
	@GetMapping("/auth/buscarCursosEstudiante/{id}")
	public List<CourseStudent> buscarCursosEstudiante(@PathVariable("id") String id);
	
	@GetMapping("/auth/buscarCursosProfesor/{id}")
	public List<Courses> buscarCursosProfesor(@PathVariable("id") String id);
	
	@PostMapping("/login")
	public ResponseEntity<Object> login(@RequestBody UserDTO usuario);
	
	//usuarios
	//cursos profesor
	//cursos estudiante
	//actualizacion de usuario
	//login
	

}
