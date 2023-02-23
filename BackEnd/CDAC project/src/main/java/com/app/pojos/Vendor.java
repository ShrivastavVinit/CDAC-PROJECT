package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="Vendors")
@ToString(callSuper = true, exclude = "password")
@NoArgsConstructor
@Getter
@Setter
public class Vendor extends BaseEntity {
	
	@Column(name="v_name",length = 30)
	private String Name;
	
	@Column(name="Mobile_number")
	private long contactNumber;
	
	@Column(name="v_email",length = 30)
	private String email;
	
	@Column(name="v_pass",length = 30)
	private String password;
	
	@Column(name="v_address",length = 30)
	private String Address;
	
	@OneToMany(mappedBy = "vendors", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	private List<EventRegister> eventList = new ArrayList<EventRegister>();
	
	
	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
	private List<Bookings> bookings = new ArrayList<Bookings>();

	public Vendor(String name, long contactNumber, String email, String password, String address) {
		super();
		Name = name;
		this.contactNumber = contactNumber;
		this.email = email;
		this.password = password;
		Address = address;
		
	}
	
	
	
	
	
	
	

}
