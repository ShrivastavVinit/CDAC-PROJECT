package com.app.service;

import java.util.List;

import com.app.dto.LoginRequestDto;
import com.app.dto.VendorDTO;

import com.app.pojos.Catalogue;
import com.app.pojos.Vendor;

public interface VendorService {

	 List<VendorDTO> getAllVendorDetails(); 
		
	    Vendor addNewVendor(VendorDTO vendor);
		
		String deleteVendor(Long id);
		
		Catalogue addNewcat(Long categoryId,Long vendorId);
		
		VendorDTO authenticateVendor(LoginRequestDto dto);//for signin
	
	
		Vendor fetchVendorDetails(String email);
		
}
