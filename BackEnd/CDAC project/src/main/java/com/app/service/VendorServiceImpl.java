package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.LoginRequestDto;
import com.app.dto.VendorDTO;
import com.app.pojos.Vendor;

import com.app.repository.VendorRepository;

@Service
@Transactional
public class VendorServiceImpl implements VendorService {

	@Autowired
	private VendorRepository VendorRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<Vendor> getAllVendorDetails()
	{
		return VendorRepo.findAll();
	}
	
//	@Override
//	public Vendor addNewVendor(Vendor vendor)
//	{
//		return VendorRepo.save(vendor);
//	}
	
	
	
	@Override
	public String deleteVendor(@RequestBody Long id)
	{
		System.out.println("in delet "+id);
		VendorRepo.deleteById(id);
		return "Vendor Deleted Successfully";
	}

@Override
public Vendor addNewVendor(VendorDTO vendor) {
	
	Vendor vendors=mapper.map(vendor,Vendor.class);
	return VendorRepo.save(vendors);
}

@Override
public Vendor authenticateVendor(LoginRequestDto dto) {
	
	return VendorRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
			.orElseThrow(() -> new ResourceNotFoundException("wrong Credentials !!!!!"));
}
	
}
