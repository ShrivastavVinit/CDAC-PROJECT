package com.app.service;

import java.util.List;

import com.app.dto.CatalogueDTO;
import com.app.pojos.Catalogue;


public interface CatalogueService {
	
	
	 List<CatalogueDTO> getAllcatalogueDetails(); 
		
	  Catalogue addNewCatalogueItem(CatalogueDTO catlogue);
		
		String deleteCatalogueItem(Long id);	

}
