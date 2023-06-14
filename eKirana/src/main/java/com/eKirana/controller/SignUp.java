package com.eKirana.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eKirana.entity.User;
import com.eKirana.service.CommonService;
import com.eKirana.service.EmailService;

@RestController
@RequestMapping(path = "/SignUp")
public class SignUp 
{
	
	private CommonService commonService;
	private EmailService emailService;
	
	@Autowired
	public SignUp(CommonService commonService, EmailService emailService) {
		this.commonService = commonService;
		this.emailService = emailService;
	}

	@PostMapping("/user")
	public String userSingUp(@RequestBody User user)
	{
		//email varification
		
		String message = emailService.sendMail(user.getEmail(), "OTP", "OTP is 24234");
		if(message.equalsIgnoreCase("Success"))
		{
			commonService.save(user);
			return "success";
		}
		return "failed";
	}
	
	@PostMapping("/seller")
	public String sellerSingUp()
	{
		return "success";
	}
	
	
}
