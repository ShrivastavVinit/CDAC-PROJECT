package com.app.service;

import java.util.List;

import com.app.pojos.Catalogue;


public interface CatalogueService {
	
	
	 List<Catalogue> getAllcatalogueDetails(); 
		
	  Catalogue addNewCatalogueItem(Catalogue cstmr);
		
		String deleteCatalogueItem(Long id);	

}
