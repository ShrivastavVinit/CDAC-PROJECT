package com.app.pojos;

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
@Table(name="cart_items")
@ToString(callSuper = true)
@NoArgsConstructor
@Getter
@Setter

public class CartItems extends BaseEntity {
	
	private int quantity;
	@Column(name="total_price")
	private double totalPrice;
	//CartItem *---->1 Cart
	@ManyToOne
	@JoinColumn(name="cart_id")
	private Cart cart;
	
	
	//CartItem 1--->1 Booking
		@OneToOne
		@JoinColumn(name="booking")
		private Bookings items;
	

}
