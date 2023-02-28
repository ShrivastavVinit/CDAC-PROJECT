package com.app.service;

import java.util.List;

import com.app.dto.LoginRequestDto;
import com.app.dto.VendorDTO;
import com.app.pojos.Vendor;

public interface VendorService {

	 List<Vendor> getAllVendorDetails(); 
		
	    Vendor addNewVendor(VendorDTO vendor);
		
		String deleteVendor(Long id);
		
		Vendor authenticateVendor(LoginRequestDto dto);
	
}
