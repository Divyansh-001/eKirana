package com.eKirana.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.methods.GetMethod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eKirana.Dto.StoreItemsBasedOnType;
import com.eKirana.Util.ParseUtil;
import com.eKirana.daoImpl.AddressDaoImpl;
import com.eKirana.daoImpl.SellerDaoImpl;
import com.eKirana.entity.Address;
import com.eKirana.entity.Seller;
import com.eKirana.entity.Stores;


@Service
public class LocationService 
{
	private final String LOCATION_URL = "https://ipinfo.io?token=463c2a57dc4b4f";
	private List<String> location = null;
	private String PATTERN = ".*\"city\":\\s\"([\\w\\s]*)[.\\s\\S]*?region\":\\s\"([\\w\\s]*)";
	
	private ParseUtil parseUtil;
	private AddressDaoImpl addressDaoImpl;
	private SellerDaoImpl sellerDaoImpl;
	private StoreItemsBasedOnType storeItemsBasedOnType;
	
	
	@Autowired
	public void setParseUtil(ParseUtil parseUtil) {
		this.parseUtil = parseUtil;
	}

	@Autowired
	public void setAddressDaoImpl(AddressDaoImpl addressDaoImpl) {
		this.addressDaoImpl = addressDaoImpl;
	}

	@Autowired
	public void setSellerDaoImpl(SellerDaoImpl sellerDaoImpl) {
		this.sellerDaoImpl = sellerDaoImpl;
	}
	
	@Autowired
	public void setStoreItemsBasedOnType(StoreItemsBasedOnType storeItemsBasedOnType) {
		this.storeItemsBasedOnType = storeItemsBasedOnType;
	}

	public List<String> getLocation()
	{
		String response = null;
		try
		{
			HttpClient httpClient = new HttpClient();
			GetMethod getMethod = new GetMethod(LOCATION_URL);
			httpClient.executeMethod(getMethod);
			response = getMethod.getResponseBodyAsString();
			location = parseUtil.parseLoaction(PATTERN, response);
			
		}
		catch(Exception ex)
		{
			System.err.println("Error occured while fetching location");
			System.err.println(ex);
		}
		
		return location;
	}
	
	
	public Map<String,List<Stores>> getLocationBasedData()
	{
		List<String> place = getLocation();
		List<Integer> address = addressDaoImpl.getAddress(place.get(0), place.get(1));
		List<Seller> sellers = sellerDaoImpl.getSellerByLocation(address);
		return storeItemsBasedOnType.getItemsByType(sellers);
	}
	
	
}
