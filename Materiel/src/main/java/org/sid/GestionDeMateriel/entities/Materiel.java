package org.sid.GestionDeMateriel.entities;



import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Materiel implements Serializable{
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String reference;
	@ManyToOne
	
	private Categorie categorie;
	private boolean etat;
	private String photo;
    @ManyToOne
	private Type type;
	@ManyToOne
	private Etablissement etablissementAc;
	@ManyToOne
	private Etablissement etablissementDon;
}
