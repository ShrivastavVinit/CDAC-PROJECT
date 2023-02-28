package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Customer;


public interface CustomerRepository extends JpaRepository<Customer, Long>  {

	//finder method for signin
	Optional<Customer> findByEmailAndPassword(String em, String pass);
}
