package com.eKirana.service;

public interface EmailService
{
	public String sendMail(String toEmail, String subject, String body);
}
