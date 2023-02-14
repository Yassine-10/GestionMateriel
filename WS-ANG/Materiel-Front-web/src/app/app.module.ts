import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterielComponent } from './materiel/materiel.component';
import {HttpClientModule} from "@angular/common/http";
import { EtablissementDonComponent } from './etablissement-don/etablissement-don.component';
import { SearchfilterPipe } from './searchfilter.pipe';
import {FormsModule} from "@angular/forms";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { CreateMaterielComponent } from './create-materiel/create-materiel.component';
import { UpdateMaterielComponent } from './update-materiel/update-materiel.component';
import { MaterielDetailsComponent } from './materiel-details/materiel-details.component';
import {MatSelectModule} from "@angular/material/select";
import { CreateEtablissementComponent } from './create-etablissement/create-etablissement.component';
import { UpdateEtablissementComponent } from './update-etablissement/update-etablissement.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { EtablissementDetailsComponent } from './etablissement-details/etablissement-details.component';
import { Searchfilter2Pipe } from './searchfilter2.pipe';
import { CreateRepresentantComponent } from './create-representant/create-representant.component';
import { UpdateRepresentantComponent } from './update-representant/update-representant.component';
import { RepresentantComponent } from './representant/representant.component';
import { SearchrepresentantPipe } from './searchrepresentant.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MaterielComponent,
    EtablissementDonComponent,
    SearchfilterPipe,
    CreateMaterielComponent,
    UpdateMaterielComponent,
    MaterielDetailsComponent,
    CreateEtablissementComponent,
    UpdateEtablissementComponent,
    EtablissementComponent,
    EtablissementDetailsComponent,
    Searchfilter2Pipe,
    CreateRepresentantComponent,
    UpdateRepresentantComponent,
    RepresentantComponent,
    SearchrepresentantPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule, MatPaginatorModule, MatTableModule, MatSelectModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
