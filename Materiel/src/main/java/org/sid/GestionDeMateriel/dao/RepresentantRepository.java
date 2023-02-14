package org.sid.GestionDeMateriel.dao;

import org.sid.GestionDeMateriel.entities.Represantant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
@RepositoryRestResource
@CrossOrigin("*")
public interface RepresentantRepository extends JpaRepository<Represantant,Long>{

}
