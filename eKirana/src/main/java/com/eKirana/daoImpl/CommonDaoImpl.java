package com.eKirana.daoImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.eKirana.dao.CommonDao;

import jakarta.persistence.EntityManager;

@Repository
public class CommonDaoImpl implements CommonDao
{
	private EntityManager entityManager;
	
	
	@Autowired
	public CommonDaoImpl(EntityManager entityManager) 
	{
		this.entityManager = entityManager;
	}



	@Override
	public void save(Object object)
	{
		entityManager.persist(object);
	}
}
