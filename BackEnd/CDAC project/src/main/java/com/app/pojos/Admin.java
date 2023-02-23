package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="Admin")
@ToString(callSuper = true, exclude = "password")
@NoArgsConstructor
@Getter
@Setter
public class Admin extends BaseEntity {
	
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
	
	public Admin(String name, long contactNumber, String email, String password, String address) {
		super();
		Name = name;
		this.contactNumber = contactNumber;
		this.email = email;
		this.password = password;
		Address = address;
	}
	
	

}
