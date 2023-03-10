package com.app.dto;



public class VendorDTO {
	
	
	private String Name;
	
	private long contactNumber;
	
	private String email;

	private String password;
	
	private String Address;
	
	

	public VendorDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	 
	
	public VendorDTO(String Name, long contactNumber, String email, String password, String Address) {
		super();
		this.Name = Name;
		this.contactNumber = contactNumber;
		this.email = email;
		this.password = password;
		this.Address = Address;
		
	}




	@Override
	public String toString() {
		return "VendorDTO [Name=" + Name + ", contactNumber=" + contactNumber + ", email=" + email + ", password="
				+ password + ", Address=" + Address + "]";
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




	public String getName() {
		return Name;
	}




	public void setName(String Name) {
		this.Name = Name;
	}




	public String getAddress() {
		return Address;
	}




	public void setAddress(String Address) {
		this.Address = Address;
	}


	

}
