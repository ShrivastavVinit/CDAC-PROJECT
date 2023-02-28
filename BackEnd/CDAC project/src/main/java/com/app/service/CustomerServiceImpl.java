package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.LoginRequestDto;
import com.app.pojos.Customer;

import com.app.repository.CustomerRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository cstmrRepo;
	
	@Override
	public List<Customer> getAllCustomerDetails()
	{
		return cstmrRepo.findAll();
	}
	
	@Override
	public Customer addNewCustomer(Customer cstmr)
	{
		return cstmrRepo.save(cstmr);
	}
	
	@Override
	public String deleteCustomer(@RequestBody Long id)
	{
		System.out.println("in delet "+id);
		cstmrRepo.deleteById(id);
		return "Customer Deleted Successfully";
	}

	@Override
	public Customer authenticateCustomer(LoginRequestDto dto) {
		
		return cstmrRepo.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("wrong Credentials !!!!!"));
	}
	
}
