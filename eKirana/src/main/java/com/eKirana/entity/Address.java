package com.eKirana.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "address")
public class Address 
{
	@Id
	@Column(name = "address_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer addressId;
	
	@Column(name = "country")
	String country;
	
	@Column(name = "state")
	String state;
	
	@Column(name = "city")
	String city;
	
	@Column(name = "pincode")
	Integer pinCode;
	
	

	public Address() 
	{
		System.out.println("address.....");
	}

	public Integer getAddressId() {
		return addressId;
	}

	public void setAddressId(Integer addressId) {
		this.addressId = addressId;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public Integer getPinCode() {
		return pinCode;
	}

	public void setPinCode(Integer pinCode) {
		this.pinCode = pinCode;
	}
	
	
	
}
