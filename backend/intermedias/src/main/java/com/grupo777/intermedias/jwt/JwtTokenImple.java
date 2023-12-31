package com.grupo777.intermedias.jwt;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.grupo777.intermedias.entity.Users;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@Service
public class JwtTokenImple implements JwtTokenInterface{
	
	@Value("${jwt.secret}")
	private String secret;
	
	@Override
	public Map<String, String> generateToken(Users usuario) {
		final Date createdDate = new Date();
		final Date expirationDate = new Date(createdDate.getTime() + (30*60000));

		String jwtToken="";
	    jwtToken = Jwts.builder()
	    		.setSubject(usuario.getUser())
	    		.setIssuedAt(createdDate)
	    		.setExpiration(expirationDate)
	    		.signWith(SignatureAlgorithm.HS256, "secret")
	    		.compact();
	    Map<String, String> jwtTokenGen = new HashMap<>();
	    jwtTokenGen.put("token", jwtToken);
	    return jwtTokenGen;
	}

}
