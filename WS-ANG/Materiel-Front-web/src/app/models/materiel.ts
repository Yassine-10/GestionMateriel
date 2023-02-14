import {Type} from "./type";
import {Categorie} from "./categorie";
import {Etablissement} from "./etablissement";


export interface Ville {
  id:number;nom:string;
}


export interface Materiel {
  id:number;
  reference:string;
   etat:boolean;
    photo:string;
  type:Type;
   categorie:Categorie;
   etablissementAc:Etablissement;
    etablissementDon:Etablissement;

}
