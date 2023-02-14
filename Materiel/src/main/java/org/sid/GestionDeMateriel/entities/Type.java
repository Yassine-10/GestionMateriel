package org.sid.GestionDeMateriel.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Type {
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private  Long id;
	private  String nom;
	@OneToMany(mappedBy="type")
	@JsonProperty(access=Access.WRITE_ONLY)
	private List<Materiel> materiel;

}
