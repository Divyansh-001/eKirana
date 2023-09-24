package com.eKirana.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "storeItems")
public class StoreItems {
	
	@Id
	@Column(name = "pk_item_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer itemId;
	
	@Column(name = "item_name")
	String itemName;
	
	@Column(name = "quantity")
	Integer quantity;
	
	@Column(name = "rate")
	Double rate;
	
	@ManyToOne()
	@JsonIgnore
	@JoinColumn(name = "fk_store_id")
	Stores stores;
	
	@Column(name = "img", columnDefinition = "TEXT")
	String Img;
	
	public Integer getItemId() {
		return itemId;
	}

	public void setItemId(Integer itemId) {
		this.itemId = itemId;
	}

	public String getItemName() {
		return itemName;
	}

	public void setItemName(String itemName) {
		this.itemName = itemName;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getRate() {
		return rate;
	}

	public void setRate(Double rate) {
		this.rate = rate;
	}

	public Stores getStores() {
		return stores;
	}

	public void setStores(Stores stores) {
		this.stores = stores;
	}

	public String getImg() {
		return Img;
	}

	public void setImg(String img) {
		Img = img;
	}

	public StoreItems() {
		System.out.println("Creating Store Entity");	
		}

	@Override
	public String toString() {
		return "StoreItems [itemId=" + itemId + ", itemName=" + itemName + ", quantity=" + quantity + ", rate=" + rate
				 + ", Img=" + Img + "]";
	}

	
	
	
	
	
}
