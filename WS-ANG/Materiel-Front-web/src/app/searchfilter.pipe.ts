import { Pipe, PipeTransform } from '@angular/core';
import {MaterielComponent} from "./materiel/materiel.component";
import {Materiel} from "./models/materiel";
import {Etablissement} from "./models/etablissement";

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform( materiels:Materiel[],searchValue:string) :Materiel[]{
    if(!materiels || !searchValue){
      return materiels;
    }
    return materiels.filter(materiels=>
      materiels.reference.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      materiels.type.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      materiels.etablissementDon.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }


}
