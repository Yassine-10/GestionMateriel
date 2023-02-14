package org.sid.GestionDeMateriel.dao;


import java.util.List;

import org.sid.GestionDeMateriel.entities.Materiel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
@RepositoryRestResource
@CrossOrigin("*")
public interface MaterielRepository extends JpaRepository<Materiel,Long>{
	Page<Materiel> findByEtablissementDonId(Long id,Pageable page);

}
