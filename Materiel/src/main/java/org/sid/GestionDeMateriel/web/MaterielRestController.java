package org.sid.GestionDeMateriel.web;

import java.io.File; import java.nio.file.Files; import java.nio.file.Path; import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.sid.GestionDeMateriel.dao.CategorieRepository;
import org.sid.GestionDeMateriel.dao.EtablissementRepository;
import org.sid.GestionDeMateriel.dao.MaterielRepository;
import org.sid.GestionDeMateriel.dao.RepresentantRepository;
import org.sid.GestionDeMateriel.dao.TypeRepository;
import org.sid.GestionDeMateriel.dao.VilleRepository;
import org.sid.GestionDeMateriel.dto.MaterielDTO;
import org.sid.GestionDeMateriel.entities.Categorie;
import org.sid.GestionDeMateriel.entities.Etablissement;
import org.sid.GestionDeMateriel.entities.Materiel;
import org.sid.GestionDeMateriel.entities.Represantant;
import org.sid.GestionDeMateriel.entities.Type;
import org.sid.GestionDeMateriel.entities.Ville;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@RestController
@CrossOrigin("*")
public class MaterielRestController {
@Autowired private MaterielRepository materielRepository;
@Autowired private EtablissementRepository etablissementRepository;
@Autowired private CategorieRepository categorieRepository;
@Autowired private TypeRepository typeRepository;
@Autowired private RepresentantRepository representantRepository;
@Autowired private VilleRepository villeRepository;

    @GetMapping(path="/imageMateriel/{id}",produces=MediaType.IMAGE_JPEG_VALUE)
    public byte[] image(@PathVariable (name="id")Long id) throws Exception {
           Materiel m=materielRepository.findById(id).get();
           String photoName=m.getPhoto();
           File file=new File(System.getProperty("user.home")+"/Materiel/image/"+photoName);
           Path path=Paths.get(file.toURI());
         return Files.readAllBytes(path);
   }
    @GetMapping(path="/imageEtablissement/{id}",produces=MediaType.IMAGE_JPEG_VALUE)
    public byte[] imageEtablissement(@PathVariable (name="id")Long id) throws Exception {
           Etablissement e=etablissementRepository.findById(id).get();
           String photoName=e.getPhoto();
           File file=new File(System.getProperty("user.home")+"/Etablissement/image/"+photoName);
           Path path=Paths.get(file.toURI());
         return Files.readAllBytes(path);
   }
    @GetMapping(path="/Logo",produces=MediaType.IMAGE_JPEG_VALUE)
    public byte[] imageLogo( )throws Exception {
          
          
           File file=new File(System.getProperty("user.home")+"/Materiel/image/Tice.jpg");
           Path path=Paths.get(file.toURI());
         return Files.readAllBytes(path);
   }
    @GetMapping(path="/LogoEtat/{id}",produces=MediaType.IMAGE_JPEG_VALUE)
    public byte[] imageLogoEtat( @PathVariable (name="id")Long id)throws Exception {
          
    	Materiel m=materielRepository.findById(id).get();
        String etat=String.valueOf(m.isEtat());
           File file=new File(System.getProperty("user.home")+"/Materiel/image/"+etat+".png");
           Path path=Paths.get(file.toURI());
         return Files.readAllBytes(path);
   }
    @GetMapping(path="/LogoDon/{id}",produces=MediaType.IMAGE_JPEG_VALUE)
    public byte[] imageLogoDon( @PathVariable (name="id")Long id)throws Exception {
          
    	Etablissement e=etablissementRepository.findById(id).get();
        String etat=String.valueOf(e.isDonatrice());
           File file=new File(System.getProperty("user.home")+"/Materiel/image/"+etat+".png");
           Path path=Paths.get(file.toURI());
         return Files.readAllBytes(path);
   }
    @GetMapping("/materiels/{id}")
	public ResponseEntity<Materiel> getMaterielById(@PathVariable(value = "id") Long materielId)
			throws ResourceNotFoundException {
		Materiel materiel = materielRepository.findById(materielId)
				.orElseThrow(() -> new ResourceNotFoundException("Materiel not found for this id :: " + materielId));
		return ResponseEntity.ok().body(materiel);
	}
    @GetMapping("/etablissements/{id}")
   	public ResponseEntity<Etablissement> getEtablissementById(@PathVariable(value = "id") Long id)
   			throws ResourceNotFoundException {
   		Etablissement etab = etablissementRepository.findById(id)
   				.orElseThrow(() -> new ResourceNotFoundException("Materiel not found for ;this id :: " + id));
   		System.out.print(id);
   		return ResponseEntity.ok().body(etab);
   	}
    @GetMapping(path="/materiel")
    public Page<Materiel> listMateriel(@RequestParam(name="page",defaultValue="0")int page,
			@RequestParam(name="size",defaultValue="5")int size){
    
    	return materielRepository.findAll(PageRequest.of(page,size));
    }
    @GetMapping(path="/etablissements")
    public Page<Etablissement> listEtablissement(@RequestParam(name="page",defaultValue="0")int page,
			@RequestParam(name="size",defaultValue="5")int size){
    
    	return etablissementRepository.findAll(PageRequest.of(page,size));
    }
    @GetMapping(path="/categories")
    public Page<Categorie> listCategorie(@RequestParam(name="page",defaultValue="0")int page,
			@RequestParam(name="size",defaultValue="5")int size){
    
    	return categorieRepository.findAll(PageRequest.of(page,size));
    }
    @GetMapping(path="/types")
    public Page<Type> listType(@RequestParam(name="page",defaultValue="0")int page,
			@RequestParam(name="size",defaultValue="5")int size){
    
    	return typeRepository.findAll(PageRequest.of(page,size));
    }
    @GetMapping(path="/villes")
    public Page<Ville> listVilles(@RequestParam(name="page",defaultValue="0")int page,
			@RequestParam(name="size",defaultValue="5")int size){
    
    	return villeRepository.findAll(PageRequest.of(page,size));
    }
    @GetMapping(path="/materielbyetablissement/{id}")
    public Page<Materiel> typeMateriel(@RequestParam(name="page",defaultValue="0")int page,
			@RequestParam(name="size",defaultValue="5")int size,@PathVariable (name="id")Long id){
    	
    	Page<Materiel> pages=materielRepository.findByEtablissementDonId(id,PageRequest.of(page,size));
    	return pages;
    }
    @GetMapping(path="/etablissementDon")
    public List<Etablissement> etablissementDon(){
      
    	List<Etablissement> e=etablissementRepository.findByDonatrice(true);
    	return e;
    }
    @PostMapping("/materiels")
    public Materiel createMateriel(@Valid @RequestBody MaterielDTO materiel) {
    	Materiel m=new Materiel();
    	Categorie cat=categorieRepository.getById(materiel.getCategorie());
    	Etablissement etab=etablissementRepository.getById(materiel.getEtablissementDon());
    	etab.setNbDeMateriel(etab.getNbDeMateriel()+1);
    	etablissementRepository.save(etab);
    	Type type=typeRepository.getById(materiel.getType());
    	m.setCategorie(cat);
    	m.setEtablissementDon(etab);
    	m.setType(type);
    	m.setReference(materiel.getReference());
    	m.setPhoto(materiel.getReference().replaceAll(" ", "")+".jpg");
    	m.setEtat(materiel.isEtat());
    	System.out.println(materiel);
    	
    	return materielRepository.save(m);
    }
   
    @PutMapping("/materiels/{id}")
	public ResponseEntity<Materiel> updateMateriel(@PathVariable(value = "id") Long materielId,
			@Valid @RequestBody MaterielDTO materielDetails) throws ResourceNotFoundException {
		Materiel materiel = materielRepository.findById(materielId)
				.orElseThrow(() -> new ResourceNotFoundException("Materiel not found for this id :: " + materielId));
        
        Categorie cat=categorieRepository.getById(materielDetails.getCategorie());
        Etablissement etabdon=etablissementRepository.getById(materielDetails.getEtablissementDon());
        Etablissement etabacc=etablissementRepository.getById(materielDetails.getEtablissementAc());
    	Type type=typeRepository.getById(materielDetails.getType());
    	if(materielDetails.getCategorie()!=null) {
        	materiel.setCategorie(cat);
        }
    	if(materielDetails.getEtablissementDon()!=null) {
        	materiel.setEtablissementDon(etabdon);
        }
    	if(materielDetails.getEtablissementAc()!=null) {
        	materiel.setEtablissementAc(etabacc);
        }
    	if(materielDetails.getType()!=null) {
        	materiel.setType(type);
        }
        materiel.setReference(materielDetails.getReference());
        materiel.setEtat(materielDetails.isEtat());

        
		final Materiel updatedMateriel = materielRepository.save(materiel);
		return ResponseEntity.ok(updatedMateriel);
	}
 
    
	@DeleteMapping("/materiel/{id}")
	public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long materielId)
			throws ResourceNotFoundException {
		Materiel materiel = materielRepository.findById(materielId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + materielId));

		materielRepository.delete(materiel);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	  @PostMapping("/representant/{idEtablissement}")
	    public Represantant createRepresentant(@Valid @RequestBody Represantant representant,@PathVariable (name="idEtablissement")Long idEtab) {
	    	Represantant r=new Represantant();
	    	
	    	Etablissement etab=etablissementRepository.getById(idEtab);
	    	
	    	r.setMail(representant.getMail());
	    	r.setEtablissement(etab);
	    	r.setNom(representant.getNom());

	    	r.setPrenom(representant.getPrenom());
	    	r.setPoste(representant.getPoste());
	    	r.setTele(representant.getTele());
	    	r.setMail(representant.getMail());
	    	
	    	
	    	return representantRepository.save(r);
	    }
	  
	    @PutMapping("/etablissement/{id}/{idVille}")
		public ResponseEntity<Etablissement> updateEtablissement(@PathVariable(value = "id") Long etablissementId,@PathVariable (name="idVille")Long idville,
				@Valid @RequestBody Etablissement etablissementDetails) throws ResourceNotFoundException {
	    	Etablissement etablissement = etablissementRepository.findById(etablissementId)
					.orElseThrow(() -> new ResourceNotFoundException("Materiel not found for this id :: " + etablissementId));
	    	Ville ville=villeRepository.getById(idville);
	    	etablissement.setNom(etablissementDetails.getNom());
	    	etablissement.setMail(etablissementDetails.getMail());
	    	etablissement.setTel(etablissementDetails.getTel());
	    	etablissement.setDonatrice(etablissementDetails.isDonatrice());
	    	etablissement.setVille(ville);
	    	
	        
			final Etablissement updatedEtablissement= etablissementRepository.save(etablissement);
			return ResponseEntity.ok(updatedEtablissement);
		}
	 
	    
		@DeleteMapping("/etablissement/{id}")
		public Map<String, Boolean> deleteEtablissement(@PathVariable(value = "id") Long etabId)
				throws ResourceNotFoundException {
			Etablissement etablissement = etablissementRepository.findById(etabId)
					.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + etabId));

			etablissementRepository.delete(etablissement);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return response;
		}
		 @PostMapping("/etablissement/{idVille}")
		    public Etablissement createEtablissement(@Valid @RequestBody Etablissement etablissement,@PathVariable (name="idVille")Long idville) {
		       Ville ville=villeRepository.getById(idville);
		     
		       Etablissement etab=new Etablissement();
		       
		       etab.setVille(ville);
		    	etab.setPhoto(etablissement.getNom().replaceAll(" ", "")+".jpg");
		    	etab.setDonatrice(etablissement.isDonatrice());
		    	etab.setMail(etablissement.getMail());
		    	etab.setNom(etablissement.getNom());
		    	etab.setTel(etablissement.getTel());
		    	etab.setNbDeMateriel(0);
		    
		    	
		    	
		    	return etablissementRepository.save(etab);
		    }
		  @GetMapping(path="/representant")
		    public Page<Represantant> listRepresentant(@RequestParam(name="page",defaultValue="0")int page,
					@RequestParam(name="size",defaultValue="5")int size){
		    
		    	return representantRepository.findAll(PageRequest.of(page,size));
		    }
		  @GetMapping("/representants/{id}")
			public ResponseEntity<Represantant> getRepresentantById(@PathVariable(value = "id") Long repId)
					throws ResourceNotFoundException {
				Represantant representant = representantRepository.findById(repId)
						.orElseThrow(() -> new ResourceNotFoundException("Materiel not found for this id :: " + repId));
				return ResponseEntity.ok().body(representant);
			}
		    @PutMapping("/representant/{id}/{idEtablissement}")
			public ResponseEntity<Represantant> updateRepresentant(@PathVariable(value = "id") Long representantId,@PathVariable (name="idEtablissement")Long idEtab,
					@Valid @RequestBody Represantant representantDetails) throws ResourceNotFoundException {
		    	Represantant representant = representantRepository.findById(representantId)
						.orElseThrow(() -> new ResourceNotFoundException("Materiel not found for this id :: " + representantId));
		    	Etablissement etab=etablissementRepository.getById(idEtab);
		    	representant.setNom(representantDetails.getNom());
		    	representant.setPrenom(representantDetails.getPrenom());
		    	representant.setPoste(representantDetails.getPoste());
		    	representant.setTele(representantDetails.getTele());
		    	representant.setMail(representantDetails.getMail());
		    	representant.setEtablissement(etab);
		    	
		        
				final Represantant updatedRepresentant = representantRepository.save(representant);
				return ResponseEntity.ok(updatedRepresentant);
			}
		 
		    
			@DeleteMapping("/representant/{id}")
			public Map<String, Boolean> deleteRepresentant(@PathVariable(value = "id") Long representantId)
					throws ResourceNotFoundException {
			Represantant representant = representantRepository.findById(representantId)
						.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + representantId));

			representantRepository.delete(representant);
				Map<String, Boolean> response = new HashMap<>();
				response.put("deleted", Boolean.TRUE);
				return response;
			}
    
		
    
}