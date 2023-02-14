package org.sid.GestionDeMateriel.entities;


import java.io.Serializable;
import java.util.List;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public  class Etablissement implements Serializable {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private long id;
	private String nom;
	private String photo;
	private String mail;
	private String tel;
	private boolean donatrice;
	@ManyToOne
	private Ville ville;
	private int nbDeMateriel;
	@OneToOne
	private Represantant represantant;
	@OneToMany(mappedBy="etablissementAc")
	@JsonProperty(access=Access.WRITE_ONLY)
	private List<Materiel> materielAc;
	@OneToMany(mappedBy="etablissementDon")
	@JsonProperty(access=Access.WRITE_ONLY)
	private List<Materiel> materielDon;
	

}
