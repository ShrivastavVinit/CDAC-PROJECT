package com.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.BookingDTO;

import com.app.pojos.Bookings;
import com.app.service.BookingService;

@CrossOrigin(origins  = "http://localhost:3000")
@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private BookingService bookservice;
	
	public BookingController() {
		System.out.println("in def ctor of "+getClass());
	}
	
	
	@GetMapping
	public List<Bookings> getBooking()
	{
		System.out.println("in get bookings");
		return bookservice.getAllBookingDetails();
	}
	
	
	@PostMapping
	public Bookings addbookings(BookingDTO bkg)
	{
		System.out.println("in bookings"+bkg);
		return bookservice.addNewBooking(bkg);
	}
	
	@DeleteMapping("/{id}")
	public String deleteVendor(@PathVariable Long id)
	{
		return bookservice.deleteVendor(id);
	}
	
	
	
	

}



