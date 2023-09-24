package com.eKirana.dao;

import java.util.List;

import com.eKirana.entity.*;

public interface SellerDao 
{
	public List<Seller> getSellerByLocation(List<Integer> address);
}
