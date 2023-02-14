import { Component, OnInit } from '@angular/core';
import {Representants} from "../models/representants";
import {Etablissement} from "../models/etablissement";
import {RepresentantService} from "../services/representant.service";
import {Router} from "@angular/router";
import {Etablissements} from "../models/etablissements";
import {Ville} from "../models/materiel";
import {EtablissementService} from "../services/etablissement.service";

@Component({
  selector: 'app-create-etablissement',
  templateUrl: './create-etablissement.component.html',
  styleUrls: ['./create-etablissement.component.css']
})
export class CreateEtablissementComponent implements OnInit {

  etablissement:  Etablissement = new  Etablissement();
  submitted = false;
  vil:any;



  ville:Ville[]=[];

  constructor(private etbalissementService: EtablissementService,
              private router: Router) { }

  ngOnInit() {
    this.getVilles();


  }
  getVilles():void {
    this.etbalissementService.getVille().subscribe(data=>{
      // @ts-ignore
      this.ville=data['content'];
    },err=>{
      console.log(err);
    })
  }



  save() {
    /*this.materielService
      .getEtablissmentById(this.etab).subscribe(data => {


        this.materiel.etablissementDon=data;
        console.log(this.materiel.etablissementDon)

      },
      error => console.log(error));*/
    this.etbalissementService
      .createEtablissement(this.etablissement,this.vil).subscribe(data => {
        console.log(data)
        this.etablissement = new Etablissement();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['ListEtablissements']);
  }
}
