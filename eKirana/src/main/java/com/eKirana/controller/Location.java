package com.eKirana.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eKirana.entity.Seller;
import com.eKirana.entity.Stores;
import com.eKirana.service.LocationService;

@RestController
@RequestMapping(path = "/eKirana/getLocation")
public class Location 
{
	LocationService locationService;
	
	Location(LocationService locationService)
	{
		this.locationService = locationService;
	}
	
	
	@GetMapping("/getLocationBasedData")
	public Map<String,List<Stores>> getLocationBasedData()
	{
		Map<String,List<Stores>> storeByLocation = locationService.getLocationBasedData();
		return storeByLocation;
	}
	
	@GetMapping("/getData")
	public String getData()
	{
		return "Sucess";
	}


}
