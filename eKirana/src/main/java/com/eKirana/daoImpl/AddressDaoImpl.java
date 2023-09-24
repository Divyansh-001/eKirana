package com.eKirana.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.eKirana.dao.AddressDao;
import com.eKirana.entity.Address;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

@Repository
public class AddressDaoImpl implements AddressDao
{
	
	EntityManager entityManger;
	
	
	
	@Autowired
	public void setEntityManger(EntityManager entityManger) {
		this.entityManger = entityManger;
	}




	public List<Integer> getAddress(String city, String state)
	{
		List<Integer> address = null;
		TypedQuery<Integer> addresses = (TypedQuery<Integer>) entityManger.createQuery("SELECT addressId FROM Address WHERE city = :city AND state = :state");
		addresses.setParameter("city", city);
		addresses.setParameter("state", state);
		address = addresses.getResultList();
		return address;
		
		
	}

}
