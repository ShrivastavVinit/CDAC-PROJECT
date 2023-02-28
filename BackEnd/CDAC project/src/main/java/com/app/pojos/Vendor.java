package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="Vendors")
@ToString(callSuper = true, exclude = "password")
//@NoArgsConstructor
@Getter
@Setter
public class Vendor extends BaseEntity {
	
	
	
	public Vendor() {
		super();
	}



	@Column(name="v_name",length = 30)
	private String Name;
	
	@Column(name="Mobile_number")
	private long contactNumber;
	@Email
	@Column(name="v_email",length = 30, unique = true)
	private String email;
	

	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$",
			message = "password must contain atleast 1 uppercase, 1 lowercase, 1 special character and 1 digit ")
	@Column(name="v_pass",length = 30, nullable = false)
	private String password;
	
	@Column(name="v_address",length = 30)
	private String Address;
	
	@OneToMany(mappedBy = "vendors", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<Catalogue> eventList = new ArrayList<Catalogue>();
	
	
	@OneToMany(mappedBy = "vendor", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<Bookings> bookings = new ArrayList<Bookings>();
	
	

	public Vendor(String name, long contactNumber, String email, String password, String address) {
		super();
		Name = name;
		this.contactNumber = contactNumber;
		this.email = email;
		this.password = password;
		Address = address;
		
	}



	public String getName() {
		return Name;
	}



	public void setName(String name) {
		Name = name;
	}



	public long getContactNumber() {
		return contactNumber;
	}



	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getAddress() {
		return Address;
	}



	public void setAddress(String address) {
		Address = address;
	}



	public List<Catalogue> getEventList() {
		return eventList;
	}



	public void setEventList(List<Catalogue> eventList) {
		this.eventList = eventList;
	}



	public List<Bookings> getBookings() {
		return bookings;
	}



	public void setBookings(List<Bookings> bookings) {
		this.bookings = bookings;
	}
	
	
	
	
	
	
	

}
