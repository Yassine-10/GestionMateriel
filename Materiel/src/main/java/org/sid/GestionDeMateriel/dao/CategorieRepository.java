package org.sid.GestionDeMateriel.dao;


import org.sid.GestionDeMateriel.entities.Categorie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin("*")
@RepositoryRestResource
public interface CategorieRepository extends JpaRepository<Categorie,Long>{

}
