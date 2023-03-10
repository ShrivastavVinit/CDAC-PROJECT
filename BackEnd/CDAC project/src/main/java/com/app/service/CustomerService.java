package com.app.service;

import java.util.List;


import com.app.dto.CustomerDTO;
import com.app.dto.LoginRequestDto;
import com.app.pojos.Customer;


public interface CustomerService {

	
  List<CustomerDTO> getAllCustomerDetails(); 
	
  	Customer addNewCustomer(CustomerDTO cstmr);
	
	String deleteCustomer(Long id);	
	
	Customer authenticateCustomer(LoginRequestDto dto);

	Customer fetchCustomerDetails(Long id);
	
}
