package com.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequestDto;
import com.app.pojos.Admin;

import com.app.service.AdminService;

@CrossOrigin(origins  = "http://localhost:3000")
@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	private AdminService adm;
	
	public AdminController() {
		System.out.println("in def ctor of "+getClass());
	}
	
	@GetMapping
	public List<Admin> getAdmin()
	{
		System.out.println("in get admin");
		return adm.getAllAdminDetails();
	}
	
	@PostMapping
	public Admin saveAdminDetails(@RequestBody Admin admin)
	{
		System.out.println("in save Admin "+admin);
		return adm.addNewAdmin(admin);
	}
	
	@DeleteMapping("/{id}")
	public String deleteAdmin(@PathVariable Long id)
	{
		return adm.deleteAdmin(id);
	}
	
	//Add REST end point for admin siginin
		@PostMapping("/signin")
		public Admin validateAdmin(@RequestBody LoginRequestDto dto)
		{
			System.out.println("in emp signin "+dto);
			return adm.authenticateAdmin(dto);
		}
}
