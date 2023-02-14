import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MaterielComponent} from "./materiel/materiel.component";
import {UpdateMaterielComponent} from "./update-materiel/update-materiel.component";
import {MaterielDetailsComponent} from "./materiel-details/materiel-details.component";
import {CreateMaterielComponent} from "./create-materiel/create-materiel.component";
import {EtablissementDetailsComponent} from "./etablissement-details/etablissement-details.component";
import {CreateEtablissementComponent} from "./create-etablissement/create-etablissement.component";
import {UpdateEtablissementComponent} from "./update-etablissement/update-etablissement.component";

import {EtablissementComponent} from "./etablissement/etablissement.component";
import {CreateRepresentantComponent} from "./create-representant/create-representant.component";
import {UpdateRepresentantComponent} from "./update-representant/update-representant.component";
import {RepresentantComponent} from "./representant/representant.component";

const routes: Routes = [

  {
    path: 'ListMateriels',
    component: MaterielComponent
  },
  {
    path: 'ListEtablissements',
    component: EtablissementComponent
  },
  {
    path: 'ListRepresentants',
    component: RepresentantComponent
  },
  { path: 'addMateriel', component: CreateMaterielComponent },
  { path: 'updateMateriel/:id', component: UpdateMaterielComponent },
  { path: 'detailsEtablissement/:id', component: MaterielDetailsComponent },

  { path: 'addEtablissement', component: CreateEtablissementComponent },
  { path: 'updateEtablissement/:id', component: UpdateEtablissementComponent },
  { path: 'detailsEtablissement/:id', component: EtablissementDetailsComponent },

  { path: 'addRepresentant', component: CreateRepresentantComponent },
  { path: 'updateRepresentant/:id', component: UpdateRepresentantComponent },
  { path: 'detailsRespresentant/:id', component: EtablissementDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
