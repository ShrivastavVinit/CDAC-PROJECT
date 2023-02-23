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
@Table(name="EventRegister")
@ToString(callSuper = true)
@NoArgsConstructor
@Getter
@Setter

//this class acts as event register for vendor
public class EventRegister {
	
	@Column(name="EventName",length = 30 )
	private String EventName;
	
	@Column(name="rate/6hrs")
	private double rate;
	
	@ManyToOne
	@JoinColumn(name = "vendor_id")
	private Vendor vendors;
	
	
	
	

}
