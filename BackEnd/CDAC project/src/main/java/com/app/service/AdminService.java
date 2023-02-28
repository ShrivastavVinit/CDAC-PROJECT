package com.app.service;

import java.util.List;

import com.app.dto.LoginRequestDto;
import com.app.pojos.Admin;



public interface AdminService {

	List<Admin> getAllAdminDetails(); //get all admin details
	
	Admin addNewAdmin(Admin emp); //register new admin
	
	String deleteAdmin(Long id); //delete an admin
	
	Admin authenticateAdmin(LoginRequestDto dto);
	
}
