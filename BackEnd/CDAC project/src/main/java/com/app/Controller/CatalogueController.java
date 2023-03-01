package com.app.Controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CatalogueDTO;
import com.app.pojos.Catalogue;

import com.app.service.CatalogueService;


@RestController
@CrossOrigin(origins  = "http://localhost:3000")
@EnableAutoConfiguration
@RequestMapping("/catalogue")
public class CatalogueController {
	
	@Autowired 
	public CatalogueService ctlg;
	
	public CatalogueController() {
		
		System.out.println("in def ctor of "+getClass());
	}
	
	@GetMapping
	public List<CatalogueDTO> getCatalogueItem()
	{
		System.out.println("in get catalogue");
		return ctlg.getAllcatalogueDetails();
	}
	
	@PostMapping
	public Catalogue addNewCatalogueItem(@RequestBody CatalogueDTO cat)
	{
		System.out.println("in save catalogue "+cat);
		return ctlg.addNewCatalogueItem(cat);
	}
	
	@DeleteMapping("/{id}")
	public String deleteCatalogueItem(@PathVariable Long id)
	{
		System.out.println(id);
		return ctlg.deleteCatalogueItem(id);
	}

}
