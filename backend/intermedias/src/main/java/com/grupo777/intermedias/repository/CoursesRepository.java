package com.grupo777.intermedias.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.grupo777.intermedias.entity.Courses;

@Repository("coursesRepository")
public interface CoursesRepository extends JpaRepository<Courses, Integer>{

}
