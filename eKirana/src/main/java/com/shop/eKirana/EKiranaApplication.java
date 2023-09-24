package com.shop.eKirana;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

import com.eKirana.service.LocationService;

@SpringBootApplication
@ComponentScan(basePackages = {"com.eKirana.controller", "com.eKirana.daoImpl", "com.eKirana.serviceimpl", "com.eKirana.Util","com.eKirana.config","com.eKirana.Dto"})
@EntityScan(basePackages = {"com.eKirana.entity"})
public class EKiranaApplication {

	public static void main(String[] args) {
		SpringApplication.run(EKiranaApplication.class, args);
		
	}

}
