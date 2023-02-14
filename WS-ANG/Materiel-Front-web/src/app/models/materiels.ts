import {Categorie} from "./categorie";
import {Etablissement} from "./etablissement";
import {Type} from "./type";

export class Materiels{
  public categorie: Categorie=new Categorie();
  public etablissementAc: Etablissement=new Etablissement();
  etablissementDon: Object=new Object();

  etat: boolean | undefined;
  id:any;
  reference: string="";
  photo: string=this.reference+"jpg";
  type: any;





}
