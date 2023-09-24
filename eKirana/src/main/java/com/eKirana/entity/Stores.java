package com.eKirana.entity;

import java.util.Set;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

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
	@JsonIgnore
	Address address;
	
	@ManyToOne()
	@JoinColumn(name = "fk_seller_id")
	@JsonIgnore
	Seller seller;
	
	@OneToMany(mappedBy = "stores", cascade = CascadeType.ALL)
	Set<StoreItems> storeItem;
	
	public Stores() 
	{
		System.out.println("Creating Strore Object");
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
		return seller;
	}



	public void setSellers(Seller sellers) {
		this.seller = sellers;
	}

	


	public Set<StoreItems> getStoreItem() {
		return storeItem;
	}



	public void setStoreItem(Set<StoreItems> storeItem) {
		this.storeItem = storeItem;
	}



	@Override
	public String toString() {
		return "Stores [storeId=" + storeId + ", storeType=" + storeType + ", storeName=" + storeName + ", address="
				+ address + ", storeItem=" + storeItem.toString() + "]";
	}



	
	
	
	
	
}
