import { Component, OnInit } from '@angular/core';
import {Materiels} from "../models/materiels";
import {Etablissement} from "../models/etablissement";
import {Categorie} from "../models/categorie";
import {Type} from "../models/type";
import {MaterielService} from "../services/materiel.service";
import {Router} from "@angular/router";
import {Representant} from "../models/representant";
import {Representants} from "../models/representants";
import {RepresentantService} from "../services/representant.service";



@Component({
  selector: 'app-create-representant',
  templateUrl: './create-representant.component.html',
  styleUrls: ['./create-representant.component.css']
})
export class CreateRepresentantComponent implements OnInit {

  representant:  Representants = new  Representants();
  submitted = false;
  etab:any;



  etablissement:Etablissement[]=[];

  constructor(private representantService: RepresentantService,
              private router: Router) { }

  ngOnInit() {
    this.getEtablissements();


  }
  getEtablissements():void {
    this.representantService.getEtablissment().subscribe(data=>{
      // @ts-ignore
      this.etablissement=data['content'];
    },err=>{
      console.log(err);
    })
  }

  newMateriel(): void {
    this.submitted = false;
    this.representant = new Representants();
  }

  save() {
    /*this.materielService
      .getEtablissmentById(this.etab).subscribe(data => {


        this.materiel.etablissementDon=data;
        console.log(this.materiel.etablissementDon)

      },
      error => console.log(error));*/
    this.representantService
      .createRepresentant(this.representant,this.etab).subscribe(data => {
        console.log(data)
        this.representant = new Representants();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['ListRepresentants']);
  }
}
