package com.grupo777.intermedias.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "course_student", schema = "practicas_intermedias")
public class CourseStudent implements Serializable{

	private static final long serialVersionUID = 2334532565475545043L;
	
	@Id
	@Column(name = "id_course_student")
	private int idCourseStudent;
	
	@ManyToOne
    @JoinColumn(name = "course_id")
	private Courses course;
	
	@ManyToOne
    @JoinColumn(name = "student_dpi")
	private Users student;

	public int getIdCourseStudent() {
		return idCourseStudent;
	}

	public void setIdCourseStudent(int idCourseStudent) {
		this.idCourseStudent = idCourseStudent;
	}

	public Courses getCourse() {
		return course;
	}

	public void setCourse(Courses course) {
		this.course = course;
	}

	public Users getStudent() {
		return student;
	}

	public void setStudent(Users student) {
		this.student = student;
	}
	
	
}
