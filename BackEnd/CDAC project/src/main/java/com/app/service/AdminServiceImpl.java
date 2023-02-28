package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.LoginRequestDto;
import com.app.pojos.Admin;
import com.app.repository.AdminRepository;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository admRepo;
	
	@Override
	public List<Admin> getAllAdminDetails()
	{
		return admRepo.findAll();
	}
	
	@Override
	public Admin addNewAdmin(Admin adm)
	{
		return admRepo.save(adm);
	}
	@Override
	public String deleteAdmin(@RequestBody Long id)
	{
		System.out.println("in delet "+id);
		admRepo.deleteById(id);
		return "Admin Deleted Successfully";
	}

	@Override
	public Admin authenticateAdmin(LoginRequestDto dto) {
	
		return admRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("wrong Credentials !!!!!"));
	}
	
}
