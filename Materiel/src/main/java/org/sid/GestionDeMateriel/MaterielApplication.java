package org.sid.GestionDeMateriel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import org.sid.GestionDeMateriel.entities.Materiel;
import org.sid.GestionDeMateriel.services.IMaterielInitService;


@SpringBootApplication

@CrossOrigin("*")
public class MaterielApplication implements CommandLineRunner {
	@Autowired 
	private IMaterielInitService materielInitService;
	@Autowired 
	private RepositoryRestConfiguration restConfiguration;
	
	public static void main(String[] args) {
		SpringApplication.run(MaterielApplication.class, args);
		
		
	}
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		restConfiguration.exposeIdsFor(Materiel.class);
		materielInitService.initCategories();materielInitService.initTypes();materielInitService.initVilles();
		materielInitService.initMateriels();
		materielInitService.initEtablissements();
		materielInitService.initRepresentants();
		
		
		

	}

}