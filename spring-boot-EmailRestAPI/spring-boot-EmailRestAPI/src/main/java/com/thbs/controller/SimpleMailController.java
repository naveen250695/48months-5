package com.thbs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping(value="/email")
public class SimpleMailController
{
	@Autowired
	public JavaMailSender javaMailSender;
	
	@GetMapping(value="/sendEmail")
	public String sendEmail()
	{
		SimpleMailMessage message = new SimpleMailMessage();
		message.setTo("gurubsm2@gmail.com");
		message.setSubject("AngularApplication");
		message.setText("Welcome To Gmail Account!!!!!!!");
		
		javaMailSender.send(message);
		return "Message sent successfully!!!";
	}

	//http://localhost:8090/email/sendEmail
}
