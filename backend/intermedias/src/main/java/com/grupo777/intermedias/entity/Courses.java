package com.grupo777.intermedias.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "courses", schema = "practicas_intermedias")
public class Courses implements Serializable{

	private static final long serialVersionUID = 7049148522511738406L;
	
	@Id
	@Column(name = "id_course")
	private int idCourse;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "start_time")
	private String startTime;
	
	@Column(name = "end_time")
	private String endTime;
	
	@ManyToOne
    @JoinColumn(name = "id_professor")
	private Users professor;

	public int getIdCourse() {
		return idCourse;
	}

	public void setIdCourse(int idCourse) {
		this.idCourse = idCourse;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public Users getProfessor() {
		return professor;
	}

	public void setProfessor(Users professor) {
		this.professor = professor;
	}
	
	

}
