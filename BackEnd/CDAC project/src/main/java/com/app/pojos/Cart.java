package com.app.pojos;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


@Entity
@Table(name = "carts")
public class Cart {
	
	@Column(name = "total_Events")
	private int totalEvents;
	
	@Column(name = "total_cart_price")
	private double totalCartPrice;
	
	// Cart 1--->1 Customer
	@OneToOne
	@JoinColumn(name = "customer_id") // to specify FK col name
	private Customer customers;
	
	// Cart 1<----->* Bookings
		//cart : one , parent , inverse
	
		@OneToMany(mappedBy = "event",cascade = CascadeType.ALL,orphanRemoval = true)
		private List<Bookings> bookedItems = new ArrayList<>();
	
	
	
}
