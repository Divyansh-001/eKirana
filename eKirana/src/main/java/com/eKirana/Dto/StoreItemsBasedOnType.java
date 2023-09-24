package com.eKirana.Dto;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.eKirana.entity.*;

@Component
@Lazy
public class StoreItemsBasedOnType 
{
	public Map<String,List<Stores>> itemsMapByType;
	
	public Map<String,List<Stores>> getItemsByType(List<Seller> sellers)
	{
		
		itemsMapByType = new HashMap<>();
		Set<Stores> stores;
		List<Stores> mappedStore = null; 
		for(Seller seller : sellers)
		{
			stores = seller.getStores();
			for(Stores store : stores)
			{
				if(itemsMapByType.containsKey(store.getStoreType()))
				{
					mappedStore = itemsMapByType.get(store.getStoreType());
					mappedStore.add(store);
					itemsMapByType.put(store.getStoreType(), mappedStore);
				}
				else
				{
					mappedStore = new ArrayList<>();
					mappedStore.add(store);
					itemsMapByType.put(store.getStoreType(), mappedStore);
				}
			}
		}
		
		
		return itemsMapByType;
	}
	
	
	
}


