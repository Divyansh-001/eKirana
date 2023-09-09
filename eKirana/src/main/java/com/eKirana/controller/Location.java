package com.eKirana.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/getLocation")
public class Location 
{
	@GetMapping("/getLocationBasedData")
	public String getLocationBasedData()
	{
		return "Sucess";
	}
	
	@GetMapping("/getData")
	public String getData()
	{
		return "Sucess";
	}


}
