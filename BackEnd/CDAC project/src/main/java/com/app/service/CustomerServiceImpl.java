package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.modelmapper.ModelMapper;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.CustomerDTO;
import com.app.dto.LoginRequestDto;
import com.app.pojos.Customer;

import com.app.repository.CustomerRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepository cstmrRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<CustomerDTO> getAllCustomerDetails()
	{
	
		return cstmrRepo.findAll().stream().map(e -> mapper.map(e, CustomerDTO.class)) // Entity --> DTO
				.collect(Collectors.toList());
	}
	
	@Override
	public Customer addNewCustomer(CustomerDTO cstmr)
	{
		Customer customers=mapper.map(cstmr,Customer.class);// DTO --> Entity
		return cstmrRepo.save(customers);
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
