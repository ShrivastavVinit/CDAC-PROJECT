package com.app.dto;



public class CatalogueDTO {
	
	private String EventName;
	
	private double rate;
	
	private Long v_id;
	
	public CatalogueDTO() {
		super();
	}


	public CatalogueDTO(String eventName, double rate, Long v_id) {
		super();
		EventName = eventName;
		this.rate = rate;
		this.v_id = v_id;
	}


	public Long getV_id() {
		return v_id;
	}


	public void setV_id(Long v_id) {
		this.v_id = v_id;
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
