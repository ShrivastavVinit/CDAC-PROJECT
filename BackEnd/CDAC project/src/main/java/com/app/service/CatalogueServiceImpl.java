package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.CatalogueDTO;

import com.app.pojos.Catalogue;
import com.app.pojos.Vendor;
import com.app.repository.CatalogueRepository;

@Service
@Transactional
public class CatalogueServiceImpl implements CatalogueService {
	
	@Autowired
	private CatalogueRepository ctlRepo;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public List<CatalogueDTO> getAllcatalogueDetails() {
		// TODO Auto-generated method stub
		return ctlRepo.findAll().stream().map(e -> mapper.map(e, CatalogueDTO.class)) // Entity --> DTO
				.collect(Collectors.toList());
	}

	@Override
	public Catalogue addNewCatalogueItem(CatalogueDTO ctl) {
		// TODO Auto-generated method stub
		
		
		Catalogue catalogues=mapper.map(ctl,Catalogue.class);// DTO --> Entity
		System.out.println(catalogues);
		return ctlRepo.save(catalogues);
		
	}

	@Override
	public String deleteCatalogueItem(Long id) {
		// TODO Auto-generated method stub
		
		System.out.println("in impl " + id);
		ctlRepo.deleteById(id);
		return "Deleted Successfully";
		
	}
		

}
