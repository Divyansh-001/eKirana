package com.eKirana.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eKirana.dao.CommonDao;
import com.eKirana.service.CommonService;

import jakarta.transaction.Transactional;

@Service
public class CommonServiceImpl implements CommonService
{
	
	private CommonDao commonDao;
	
	
	@Autowired
	public CommonServiceImpl(CommonDao commonDao) 
	{
		this.commonDao = commonDao;
	}

	@Override
	@Transactional
	public void save(Object object)
	{
		commonDao.save(object);
	}
}
