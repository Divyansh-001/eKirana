package com.eKirana.daoImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.eKirana.dao.SellerDao;
import com.eKirana.entity.Address;
import com.eKirana.entity.Seller;

import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

@Repository
public class SellerDaoImpl implements SellerDao 
{
	public EntityManager entityManager;
	
	@Autowired	
	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public List<Seller> getSellerByLocation(List<Integer> address) 
	{
		List<Seller> seller = null;
		TypedQuery<Seller> sellers = (TypedQuery<Seller>) entityManager.createQuery("FROM Seller WHERE address.addressId IN :address");
		sellers.setParameter("address", address);
		seller = sellers.getResultList();
		return seller;
		
		
	}

}
