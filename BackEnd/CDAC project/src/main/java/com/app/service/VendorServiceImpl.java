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
	public VendorDTO authenticateVendor(LoginRequestDto dto) {

		Vendor vendor = VendorRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("wrong Credentials !!!!!"));
	
		return mapper.map(vendor, VendorDTO.class);
	}

	@Override
	public Catalogue addNewcat(Long catalogId,Long vendorId) {
		// TODO Auto-generated method stub
		Catalogue catalogue=ctlRepo.findById(catalogId).orElseThrow(()->new ResourceNotFoundException("wrong Id catalogue !!!!!"));
		Vendor vnd =VendorRepo.findById(vendorId)
				.orElseThrow(()->new ResourceNotFoundException("wrong Id vendor!!!!!"));
				
//				Catalogue ctl=new Catalogue();
				catalogue.setVendors(vnd);
//				ctl.setVendors(vnd);
//				

		return ctlRepo.save(catalogue);
	}

	@Override
	public Vendor fetchVendorDetails(String email) {
		return VendorRepo.findByEmail(email).orElseThrow(() -> new ResourceNotFoundException("Invalid vendor email !!!!!"));

	}

	

}
