package com.grupo777.intermedias.jwt;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class JwtFilterConfig {
	@Bean
    FilterRegistrationBean<JwtFilter> jwtFilter() {
        FilterRegistrationBean<JwtFilter>  filter= new FilterRegistrationBean<>();
        filter.setFilter(new JwtFilter());
        
       filter.addUrlPatterns("/intermedias/auth/*");   
       return filter;
    }
}
