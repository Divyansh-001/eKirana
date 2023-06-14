package com.eKirana.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.eKirana.Util.PropertiesUtil;
import com.eKirana.service.EmailService;

@Service
public class EmailServiceImpl implements EmailService 
{
	private JavaMailSender javaMailSender;
	private PropertiesUtil propertiesUtil;

	@Autowired
	public EmailServiceImpl(JavaMailSender javaMailSender, PropertiesUtil propertiesUtil) 
	{
		this.javaMailSender = javaMailSender;
		this.propertiesUtil = propertiesUtil;
	}
	
	@Override
	public String sendMail(String toEmail, String subject, String body)
	{
		SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
		simpleMailMessage.setFrom(propertiesUtil.getFromMail());
		simpleMailMessage.setTo(toEmail);
		simpleMailMessage.setSubject(subject);
		simpleMailMessage.setText(body);
		
		
		try
		{
			javaMailSender.send(simpleMailMessage);
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
			return "Failed"; 
		}
		return "Success";
	}
}
