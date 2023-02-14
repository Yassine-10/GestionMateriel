package org.sid.GestionDeMateriel.dao;


import java.util.List;

import org.sid.GestionDeMateriel.entities.Etablissement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
@RepositoryRestResource
@CrossOrigin("*")
public interface EtablissementRepository extends JpaRepository<Etablissement,Long>{
	List<Etablissement> findByDonatrice(boolean n);
}
