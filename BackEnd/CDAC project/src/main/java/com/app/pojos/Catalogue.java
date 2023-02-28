package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="Catalogue")
@ToString(callSuper = true)
//@NoArgsConstructor
@Getter
@Setter

//this class acts as event register for vendor
public class Catalogue extends BaseEntity {
	
	
	
	public Catalogue() {
		super();
	}

	@Column(name="EventName",length = 30,unique = true )
	private String EventName;
	
	@Column(name="rate_per_6_hrs")
	private double rate;
	
	@ManyToOne
	@JoinColumn(name = "vendor_id")
	private Vendor vendors;

	public String getEventName() {
		return EventName;
	}

	public void setEventName(String eventName) {
		EventName = eventName;
	}

	public double getRate() {
		return rate;
	}

	public void setRate(double rate) {
		this.rate = rate;
	}

//	public Vendor getVendors() {
//		return vendors;
//	}
//
//	public void setVendors(Vendor vendors) {
//		this.vendors = vendors;
//	}
	
	
	
	

}