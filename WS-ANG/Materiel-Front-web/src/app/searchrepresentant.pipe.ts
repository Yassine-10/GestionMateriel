import { Pipe, PipeTransform } from '@angular/core';
import {Materiel} from "./models/materiel";
import {Representant} from "./models/representant";

@Pipe({
  name: 'searchrepresentant'
})
export class SearchrepresentantPipe implements PipeTransform {

  transform( representants:Representant[],searchValue:string) :Representant[]{
    if(!representants || !searchValue){
      return representants;
    }
    return representants.filter(representants=>
      representants.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      representants.prenom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      representants.mail.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      representants.etablissement.nom.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())||
      representants.tele.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      representants.mail.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  }
}
