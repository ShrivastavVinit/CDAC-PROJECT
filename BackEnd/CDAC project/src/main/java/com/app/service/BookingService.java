package com.app.service;

import java.util.List;

import com.app.dto.BookingDTO;
import com.app.pojos.Bookings;

public interface BookingService {

List<Bookings> getAllBookingDetails(); 
	
	String deleteBooking(Long id);

	Bookings addNewBooking(BookingDTO booking);

	String deleteVendor(Long id);	
	
	
}
