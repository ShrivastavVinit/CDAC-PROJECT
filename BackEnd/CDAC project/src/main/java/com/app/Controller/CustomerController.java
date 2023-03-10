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

import com.app.dto.CustomerDTO;
import com.app.dto.LoginRequestDto;
import com.app.pojos.Admin;
import com.app.pojos.Customer;
import com.app.pojos.Vendor;
import com.app.service.CustomerService;

@CrossOrigin(origins  = "http://localhost:3000")
@RestController
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	public CustomerService cstmr;

	public CustomerController() {
		System.out.println("in def ctor of "+getClass());
	}
	
	@GetMapping
	public List<CustomerDTO> getCustomer()
	{
		System.out.println("in get customer");
		 System.out.println(cstmr.getAllCustomerDetails());
		 return cstmr.getAllCustomerDetails();
	}
	
	@PostMapping
	public Customer saveCustomerDetails(@RequestBody CustomerDTO customer)
	{
		System.out.println("in save customer "+customer);
		return cstmr.addNewCustomer(customer);
	}
	
	@DeleteMapping("/{id}")
	public String deleteCustomer(@PathVariable Long id)
	{
		return cstmr.deleteCustomer(id);
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> validateCustomer(@RequestBody @Valid LoginRequestDto dto)
	{
		System.out.println("in cust signin "+dto);
		return ResponseEntity.ok(cstmr.authenticateCustomer(dto));
	}
	
	@GetMapping("/{id}")
	public Customer getCustomerDetails(@PathVariable @Range(min = 1, max = 10, message = "Customer Id out of range!!!!!") Long id) {
		System.out.println("in get vendor details " + id);
		return cstmr.fetchCustomerDetails(id);
		
	}
	
}
