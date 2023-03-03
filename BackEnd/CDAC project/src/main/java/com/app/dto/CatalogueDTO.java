package com.app.dto;

import com.app.pojos.Vendor;

public class CatalogueDTO {
	
	private String EventName;
	
	private double rate;
	
	private Long vendorID;
	
	public CatalogueDTO() {
		super();
	}


	public CatalogueDTO(String eventName, double rate,Long vendorID) {
		super();
		EventName = eventName;
		this.rate = rate;
		this.vendorID=vendorID;
		
	}
	
	public Long getVendorID() {
		return vendorID;
	}


	public void setVendorID(Long V_id) {
		this.vendorID = V_id;
	}


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
	
	

	

}
