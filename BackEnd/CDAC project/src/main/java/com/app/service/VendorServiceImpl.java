package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.LoginRequestDto;
import com.app.dto.VendorDTO;
import com.app.pojos.Catalogue;
import com.app.pojos.Vendor;
import com.app.repository.CatalogueRepository;
import com.app.repository.VendorRepository;

@Service
@Transactional
public class VendorServiceImpl implements VendorService {

	@Autowired
	private VendorRepository VendorRepo;

	@Autowired
	private ModelMapper mapper;
	@Autowired
	private CatalogueRepository ctlRepo;

	@Override
	public List<VendorDTO> getAllVendorDetails() {
		return VendorRepo.findAll().stream().map(e -> mapper.map(e, VendorDTO.class)) // Entity --> DTO
				.collect(Collectors.toList());

	}

//	@Override
//	public Vendor addNewVendor(Vendor vendor)
//	{
//		return VendorRepo.save(vendor);
//	}

	@Override
	public Vendor addNewVendor(VendorDTO vendor) {

		Vendor vendors = mapper.map(vendor, Vendor.class);// DTO --> Entity
		return VendorRepo.save(vendors);
	}

	@Override
	public String deleteVendor(@RequestBody Long id) {
		System.out.println("in delet " + id);
		VendorRepo.deleteById(id);
		return "Vendor Deleted Successfully";
	}

	@Override
	public Vendor authenticateVendor(LoginRequestDto dto) {

		return VendorRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("wrong Credentials !!!!!"));
	}

	@Override
	public Catalogue addNewcat(Long verndorId) {
		// TODO Auto-generated method stub
		Vendor vnd =VendorRepo.findById(verndorId)
				.orElseThrow(()->new ResourceNotFoundException("wrong Id !!!!!"));
				
				Catalogue ctl=new Catalogue();
				ctl.s

		return ctlRepo.save(ctl);
	}

}
