package com.grupo777.intermedias.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo777.intermedias.entity.CourseStudent;

@Repository("CourseStudentRepository")
public interface CourseStudentRepository extends JpaRepository<CourseStudent, Integer>{
	
	public List<CourseStudent> findByStudentDpiLike(String dpi);

}
