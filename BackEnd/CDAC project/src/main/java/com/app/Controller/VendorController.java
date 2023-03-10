package com.app.Controller;

import java.util.List;

import javax.validation.Valid;

import org.hibernate.validator.constraints.Range;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.LoginRequestDto;
import com.app.dto.VendorDTO;
import com.app.pojos.Vendor;
import com.app.service.VendorService;

@CrossOrigin(origins  = "http://localhost:3000")
@RestController
@RequestMapping("/vendor")
public class VendorController {

	@Autowired
	public VendorService vdr;
	
	public VendorController() {
		System.out.println("in def ctor of "+getClass());
	}
	

	@GetMapping
	public List<VendorDTO> getVendor()
	{
		System.out.println("in get Vendor");
		 System.out.println(vdr.getAllVendorDetails());
		 return vdr.getAllVendorDetails();
	}
	
//	@PostMapping
//	public Vendor saveVendorDetails(@RequestBody Vendor vendor)
//	{
//		System.out.println("in save vendor "+vendor);
//		return vdr.addNewVendor(vendor);
//	}
	
	@PostMapping
	public Vendor saveVendorDetails(@RequestBody VendorDTO vendor)
	{
		System.out.println("in save vendor "+vendor);
		return vdr.addNewVendor(vendor);
	}
	
//	@PostMapping("/{catalogId}/catalogue/{vendorId}")
//	public ResponseEntity<Void> addNewcat(@PathVariable Long catalogId,@PathVariable Long vendorId){
//		
//		vdr.addNewcat(catalogId, vendorId);
//		return ResponseEntity.ok().build();
//	}
	
	
	
	@DeleteMapping("/{id}")
	public String deleteVendor(@PathVariable Long id)
	{
		return vdr.deleteVendor(id);
	}
	
	
	
	@PostMapping("/signin")
	public ResponseEntity<?> validateVendor(@RequestBody @Valid LoginRequestDto dto)
	{
		System.out.println("in vendor signin "+dto);
		return ResponseEntity.ok(vdr.authenticateVendor(dto));
	}
	
	
	@GetMapping("/{email}")
	public Vendor getVendorDetails(@PathVariable @Range(min = 1, max = 10, message = "Vendor Id out of range!!!!!") String email) {
		System.out.println("in get vendor details " + email);
		return vdr.fetchVendorDetails(email);
		
	}

	
}
