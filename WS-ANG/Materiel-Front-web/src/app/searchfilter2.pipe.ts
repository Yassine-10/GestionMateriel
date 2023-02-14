import { Pipe, PipeTransform } from '@angular/core';
import {Etablissement} from "./models/etablissement";
import {Etablissements} from "./models/etablissements";

@Pipe({
  name: 'searchfilter2'
})
export class Searchfilter2Pipe implements PipeTransform {

  transform( etablissement:Etablissements[],searchValue:string) :Etablissements[]{
    if(!etablissement || !searchValue){
      return etablissement;
    }
    return etablissement.filter(etablissement=>
      etablissement.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      etablissement.ville.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      etablissement.mail.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }

}
