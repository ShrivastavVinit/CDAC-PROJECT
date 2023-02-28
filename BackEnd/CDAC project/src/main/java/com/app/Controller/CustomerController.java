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
import com.app.pojos.Customer;
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
	public List<Customer> getCustomer()
	{
		System.out.println("in get Customer");
		return cstmr.getAllCustomerDetails();
	}
	
	@PostMapping
	public Customer saveCustomerDetails(@RequestBody Customer customer)
	{
		System.out.println("in save vendor "+customer);
		return cstmr.addNewCustomer(customer);
	}
	
	@DeleteMapping("/{id}")
	public String deleteCustomer(@PathVariable Long id)
	{
		return cstmr.deleteCustomer(id);
	}
	
	@PostMapping("/signin")
	public Customer validateCustomer(@RequestBody LoginRequestDto dto)
	{
		System.out.println("in emp signin "+dto);
		return cstmr.authenticateCustomer(dto);
	}
}
