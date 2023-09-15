package com.grupo777.intermedias.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo777.intermedias.entity.CourseStudent;
import com.grupo777.intermedias.entity.Courses;

@Repository("coursesRepository")
public interface CoursesRepository extends JpaRepository<Courses, Integer>{
	
	public List<Courses> findByProfessorDpiLike(String dpi);


}
