package com.eKirana.entity;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.*;

@Entity
@Table(name = "seller")
public class Seller 
{
	@Id
	@Column(name = "seller_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer sellerId;
	
	@Column(name = "first_name")
	String firstName;
	
	@Column(name = "last_name")
	String lastName;
	
	@Column(name = "password")
	String password;
	
	@Column(name = "email")
	String email;
	
	@Column(name = "phone_number")
	Long phoneNumber;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id", referencedColumnName = "address_id")
	@JsonIgnore
	Address address;
	
	@OneToMany(mappedBy = "seller", cascade = CascadeType.ALL)
	@JsonIgnore
	Set<Stores> stores;
	
	

	public Seller() 
	{
		System.out.println("seller.....");
	}

	public Integer getSellerId() {
		return sellerId;
	}

	public void setSellerId(Integer sellerId) {
		this.sellerId = sellerId;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public Set<Stores> getStores() {
		return stores;
	}

	public void setStores(Set<Stores> stores) {
		this.stores = stores;
	}

	@Override
	public String toString() {
		return "Seller [sellerId=" + sellerId + ", firstName=" + firstName + ", lastName=" + lastName + ", password="
				+ password + ", email=" + email + ", phoneNumber=" + phoneNumber + ", address=" + address.toString() + ", stores="
				+ stores.toString() + "]";
	}
	
	
	
}
