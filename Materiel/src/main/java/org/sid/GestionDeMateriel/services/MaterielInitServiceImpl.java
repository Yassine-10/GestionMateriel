package org.sid.GestionDeMateriel.services;

import java.util.List;
import java.util.Random;
import java.util.stream.Stream;

import javax.transaction.Transactional;

import org.sid.GestionDeMateriel.dao.EtablissementRepository;
import org.sid.GestionDeMateriel.dao.MaterielRepository;
import org.sid.GestionDeMateriel.dao.RepresentantRepository;
import org.sid.GestionDeMateriel.dao.TypeRepository;
import org.sid.GestionDeMateriel.dao.VilleRepository;
import org.sid.GestionDeMateriel.entities.Categorie;
import org.sid.GestionDeMateriel.entities.Etablissement;
import org.sid.GestionDeMateriel.entities.Materiel;
import org.sid.GestionDeMateriel.entities.Represantant;
import org.sid.GestionDeMateriel.entities.Type;
import org.sid.GestionDeMateriel.entities.Ville;

import org.sid.GestionDeMateriel.dao.CategorieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
@Service
@CrossOrigin("*")
@Transactional
public class MaterielInitServiceImpl implements IMaterielInitService {
	
	
	@Autowired private CategorieRepository categorieRepository;
	@Autowired private EtablissementRepository etablissementRepository;
	@Autowired private MaterielRepository materielRepository;
	@Autowired private RepresentantRepository representantRepository;
	@Autowired private TypeRepository typeRepository;
	@Autowired private VilleRepository villeRepository;

	@Override
	public void initMateriels() {
		// TODO Auto-generated method stub
		Stream.of("DELL OPTIPLEX 3040","DELL OPTIPLEX 3050","DELL OPTIPLEX 3080","DELL OPTIPLEX 3020","DELL OPTIPLEX 390"
				,"DELL OPTIPLEX 780","DELL OPTIPLEX 755","hp Compaq Pentium 4","LG XPION Z20KG ",
				"HP Compaq 8000/8200 SFF").forEach(mat->{
			Materiel materiel=new Materiel();
			materiel.setCategorie(categorieRepository.getById(Long.valueOf(1)));
			materiel.setEtablissementDon(etablissementRepository.getById(Long.valueOf(1+(int)(Math.random()*3))));
			materiel.setEtablissementAc(etablissementRepository.getById(Long.valueOf(4)));
			materiel.setEtat(true);
			materiel.setPhoto(mat.replaceAll(" ", "")+".jpg");
			materiel.setReference(mat);
			materiel.setType(typeRepository.getById(Long.valueOf(2)));
			
			materielRepository.save(materiel);
			});
		Stream.of("Cisco Catalyst WS-C2960-24","Cisco Catalyst WS-C2960-24","Cisco Catalyst 3550","Cisco Catalyst 2960L").forEach(mat->{
			Materiel materiel=new Materiel();
			materiel.setCategorie(categorieRepository.getById(Long.valueOf(1)));
			materiel.setEtablissementDon(etablissementRepository.getById(Long.valueOf(1+(int)(Math.random()*3))));
			materiel.setEtablissementAc(etablissementRepository.getById(Long.valueOf(4)));
			materiel.setEtat(true);
			materiel.setPhoto(mat.replaceAll(" ", "")+".jpg");
			materiel.setReference(mat);
			materiel.setType(typeRepository.getById(Long.valueOf(10)));
			
			materielRepository.save(materiel);
			});
		
		
	}

	@Override
	public void initRepresentants() {
		// TODO Auto-generated method stub
		
		List<Etablissement> etablissements=etablissementRepository.findAll();
		Stream.of("Hassan","Amine","Mohammed")
		.forEach(nom->{
	    int i=1+(int)(Math.random()*3);
		Represantant represantant=new Represantant();
		represantant.setNom(nom);
		represantant.setMail(nom+"@gmail.com");		
		represantant.setTele("06 31 87 16 52");
		represantant.setEtablissement(etablissements.get(i));
		//etablissementRepository.u
		//etablissements.get(etablissements.size()).setRepresantant(represantant);
		//etablissements.remove(etablissements.size());
		representantRepository.save(represantant);
		i++;
		});
		
		
	}

	@Override
	public void initTypes() {
		// TODO Auto-generated method stub
		Stream.of("Ecran","Unite Centrale","Souris","Clavier","Table","Chaise","Fauteuille","Armoire","Climatiseur","Switche",
				"Serveur","imprimante").forEach(typ->{
			Type type=new Type();
			type.setNom(typ);
			typeRepository.save(type);
			});
		
	}

	@Override
	public void initCategories() {
		// TODO Auto-generated method stub
		Stream.of("Informatique","Immobilier").forEach(cat->{
			Categorie categorie=new Categorie();
			categorie.setNom(cat);
			categorieRepository.save(categorie);
			});
		
	}

	@Override
	public void initEtablissements() {
		// TODO Auto-generated method stub
		List<Ville> villes=villeRepository.findAll();
		Stream.of("Webhelp","credit agricole","Hp","Ministere")
		.forEach(nom->{
		Etablissement etablissement=new Etablissement();
		etablissement.setNom(nom);
		etablissement.setMail(nom+"@gmail.com");
		etablissement.setVille(villes.get(new Random().nextInt(villes.size())));
		if (nom=="Ministere") {etablissement.setDonatrice(false);}
		etablissement.setDonatrice(true);
		etablissement.setPhoto(nom.replaceAll(" ", "")+".jpg");
		etablissement.setTel("05 37 15 16 31");
		etablissementRepository.save(etablissement);
		});
		
		
	}

	@Override
	public void initVilles() {
		// TODO Auto-generated method stub
		Stream.of("Casablanca","Rabat","kenitra","Temara","Tanger").forEach(v->{
			Ville ville =new Ville();
			ville.setNom(v);
			villeRepository.save(ville);
			});
		
	}

}
