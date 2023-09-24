package com.eKirana.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.eKirana.service.LocationService;

@Configuration
public class ConfigFile 
{
	
	@Bean
	public LocationService getLocation()
	{
		return new LocationService();
	}
	 
	
}
