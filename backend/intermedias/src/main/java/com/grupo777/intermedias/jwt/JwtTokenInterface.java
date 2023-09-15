package com.grupo777.intermedias.jwt;

import java.util.Map;

import com.grupo777.intermedias.entity.Users;



public interface JwtTokenInterface {
	Map<String, String> generateToken(Users usuario);
}
