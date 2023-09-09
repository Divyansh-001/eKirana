package com.eKirana.service;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.GetMethod;


public class LocationService 
{
	private final String LOCATION_URL = "https://ipinfo.io?token=463c2a57dc4b4f";
	public String getLocation()
	{
		try
		{
			HttpClient httpClient = new HttpClient();
			GetMethod getMethod = new GetMethod(LOCATION_URL);
			httpClient.executeMethod(getMethod);
			String response = getMethod.getResponseBodyAsString();
			System.out.println(response);
		}
		catch(Exception ex)
		{
			
		}
		
		return "";
	}
}
