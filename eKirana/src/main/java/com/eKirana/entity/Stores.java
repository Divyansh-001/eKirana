package com.eKirana.entity;

import jakarta.persistence.*;
import java.util.*;

@Entity
@Table(name = "stores")
public class Stores 
{

	@Id
	@Column(name = "pk_store_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer storeId;
	
	@Column(name = "store_type")
	String storeType;
	
	@Column(name = "store_name")
	String storeName;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id", referencedColumnName = "address_id")
	Address address;
	
	@ManyToOne()
	@JoinColumn(name = "pk_seller_id", referencedColumnName = "seller_id")
	private Seller sellers;
	
	

	public Stores() 
	{
		System.out.println("Creating Strore Object");
	}



	public Stores(String storeType, String storeName, Address address, Seller sellers) 
	{
		this.storeType = storeType;
		this.storeName = storeName;
		this.address = address;
		this.sellers = sellers;
	}


	public Integer getStoreId() {
		return storeId;
	}



	public void setStoreId(Integer storeId) {
		this.storeId = storeId;
	}



	public String getStoreType() {
		return storeType;
	}



	public void setStoreType(String storeType) {
		this.storeType = storeType;
	}



	public String getStoreName() {
		return storeName;
	}



	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}



	public Address getAddress() {
		return address;
	}



	public void setAddress(Address address) {
		this.address = address;
	}



	public Seller getSellers() {
		return sellers;
	}



	public void setSellers(Seller sellers) {
		this.sellers = sellers;
	}



	@Override
	public String toString() {
		return "Strores [storeId=" + storeId + ", storeType=" + storeType + ", storeName=" + storeName + ", address="
				+ address + ", sellers=" + sellers + "]";
	}
	
	
	
	
}
