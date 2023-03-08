package com.app.service;

import java.util.List;

import com.app.dto.CatalogueDTO;
import com.app.pojos.Catalogue;


public interface CatalogueService {
	
	
	 List<Catalogue> getAllcatalogueDetails(); 
		
	  Catalogue addNewCatalogueItem(CatalogueDTO catlogue,Long vendorId);
		
		String deleteCatalogueItem(Long id);	

}
