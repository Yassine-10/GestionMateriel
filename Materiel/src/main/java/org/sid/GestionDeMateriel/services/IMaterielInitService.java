package org.sid.GestionDeMateriel.services;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("*")
public interface IMaterielInitService {
	public void initEtablissements();
	public void initMateriels();
	public void initRepresentants();
	public void initTypes();
	public void initCategories();
	public void initVilles();

}
