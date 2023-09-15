package com.grupo777.intermedias.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "user_type", schema = "practicas_intermedias")
public class UserType implements Serializable{

	private static final long serialVersionUID = -3755578037528469358L;
	
	@Id
	@Column(name = "id_user_type")
	private int idType;
	
	@Column(name = "type")
	private String type;

	public int getIdType() {
		return idType;
	}

	public void setIdType(int idType) {
		this.idType = idType;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	

}
