package com.app.pojos;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;

import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name="Bookings")
@ToString(callSuper = true)
//@NoArgsConstructor
@Getter
@Setter

public class Bookings extends BaseEntity{
	
	
	public Bookings() {
		super();
	}

	@Column(name="Event_venue",length = 30)
	private String venue;
	
	@Column(name="Event_Date")
	private LocalDate date;
	
	@Column(name="Event_Time")
	private LocalDateTime time;
	
	@ManyToOne
	@JoinColumn(name="V_id")
	private Vendor vendor;
	
	@ManyToOne
	@JoinColumn(name="C_id")
	private Customer customer;
	
	@OneToOne(mappedBy = "bookingItem")
	private CartItems items;

}
