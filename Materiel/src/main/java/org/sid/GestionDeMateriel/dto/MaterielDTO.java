package org.sid.GestionDeMateriel.dto;





import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
@Data
@AllArgsConstructor @NoArgsConstructor @ToString

public class MaterielDTO {
	private Long id;
	private String reference;
	private Long categorie;
	private boolean etat;
	private String photo;
  
	private Long type;
	private Long etablissementAc;
	
	private Long etablissementDon;

}
