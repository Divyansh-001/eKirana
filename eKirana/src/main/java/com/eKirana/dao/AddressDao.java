package com.eKirana.dao;

import java.util.List;

import com.eKirana.entity.*;


public interface AddressDao
{
	public List<Integer> getAddress(String city, String state);
}
