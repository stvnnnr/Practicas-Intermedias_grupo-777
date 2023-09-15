package com.grupo777.intermedias.interfaces;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.grupo777.intermedias.entity.CourseStudent;
import com.grupo777.intermedias.entity.Courses;
import com.grupo777.intermedias.entity.UserType;
import com.grupo777.intermedias.entity.Users;

@RestController
@RequestMapping("/intermedias")
@CrossOrigin
public interface GeneralInterface {
	
	@GetMapping("/buscarCursos")
	public List<Courses> buscarCursos();
	
	@GetMapping("/buscarCursosEstudiante")
	public List<CourseStudent> buscarCursosEstudiante();
	
	@GetMapping("/buscarUsuarios")
	public List<Users> buscarUsuarios();
	
	@GetMapping("/buscarTipos")
	public List<UserType> buscarTipos();

	@PostMapping("/guardarUsuario")
	public Users guardarC(@RequestBody Users usuario);

}
