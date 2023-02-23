package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name="Customer")
@ToString(callSuper = true, exclude = "password")
@NoArgsConstructor
@Getter
@Setter
public class Customer extends BaseEntity {
	
	@Column(name="c_name",length = 30)
	private String Name;
	
	@Column(name="Mobile_number")
	private long contactNumber;
	
	@Column(name="c_email",length = 30)
	private String email;
	
	@Column(name="c_pass",length = 30)
	private String password;
	
	@Column(name="c_address",length = 30)
	private String Address;
	
	// customer 1--->* bookings
	@OneToMany(mappedBy = "customer", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	private List<Bookings> bookingList = new ArrayList<Bookings>();
	
	// customer 1--->1 Cart
		@OneToOne(mappedBy = "customers", cascade = CascadeType.ALL, fetch = FetchType.EAGER, orphanRemoval = true)
		private Cart cart;
	
	
	public Customer(String name, long contactNumber, String email, String password, String address) {
		super();
		Name = name;
		this.contactNumber = contactNumber;
		this.email = email;
		this.password = password;
		Address = address;
	}
	
	
	
	
	
	
	

}
