package com.app.service;

import java.util.List;

import com.app.dto.LoginRequestDto;
import com.app.pojos.Customer;

public interface CustomerService {

	
  List<Customer> getAllCustomerDetails(); 
	
  Customer addNewCustomer(Customer cstmr);
	
	String deleteCustomer(Long id);	
	
	Customer authenticateCustomer(LoginRequestDto dto);
	
}
