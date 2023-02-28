package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.pojos.Catalogue;
import com.app.repository.CatalogueRepository;

@Service
@Transactional
public class CatalogueServiceImpl implements CatalogueService {
	
	@Autowired
	private CatalogueRepository ctlRepo;

	@Override
	public List<Catalogue> getAllcatalogueDetails() {
		// TODO Auto-generated method stub
		return ctlRepo.findAll();
	}

	@Override
	public Catalogue addNewCatalogueItem(Catalogue ctl) {
		// TODO Auto-generated method stub
		return ctlRepo.save(ctl);
	}

	@Override
	public String deleteCatalogueItem(Long id) {
		// TODO Auto-generated method stub
		ctlRepo.deleteById(id);
		return "Deleted Successfully";
	}

}
