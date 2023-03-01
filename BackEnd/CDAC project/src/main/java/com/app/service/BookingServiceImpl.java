package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.BookingDTO;
import com.app.pojos.Bookings;
import com.app.repository.BookingRepository;


@Service
@Transactional
public class BookingServiceImpl implements BookingService {

	@Autowired
	private ModelMapper mapper;
	

	@Autowired
	private BookingRepository bookRepo;
	
	@Override
	public List<Bookings> getAllBookingDetails() {
		
		return bookRepo.findAll();
				
	}

	@Override
	public Bookings addNewBooking(BookingDTO booking) {
		
		Bookings bookings=mapper.map(booking, Bookings.class);// DTO --> Entity
		System.out.println(bookings);
		return bookRepo.save(bookings);
	}

	@Override
	public String deleteBooking(Long id) {
		
		System.out.println("in impl " + id);
		bookRepo.deleteById(id);
		return "Deleted Successfully";
		
	}

	@Override
	public String deleteVendor(Long id) {
		// TODO Auto-generated method stub
		bookRepo.deleteById(id);
		
		return "successfully deleted";
	}

}
