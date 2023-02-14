import { Component, OnInit } from '@angular/core';
import {Materiels} from "../models/materiels";
import {ActivatedRoute, Router} from "@angular/router";
import {MaterielService} from "../services/materiel.service";
import {Representant} from "../models/representant";
import {Representants} from "../models/representants";
import {RepresentantService} from "../services/representant.service";
import {Etablissement} from "../models/etablissement";

@Component({
  selector: 'app-update-representant',
  templateUrl: './update-representant.component.html',
  styleUrls: ['./update-representant.component.css']
})
export class UpdateRepresentantComponent implements OnInit {

  // @ts-ignore
  id: number ;
  etab:any;

  etablissement:Etablissement[]=[];

  // @ts-ignore
  public representant: Representants;

  constructor(private route: ActivatedRoute,private router: Router,
              private representantService: RepresentantService) { }

  ngOnInit() {

    this.hamid(); this.getEtablissements();


  }
  hamid(){
    this.representant=new Representants();
    this.id = this.route.snapshot.params['id'];


    this.representantService.getRepresentants(this.id)
      .subscribe(data => {
        console.log(data)
        // @ts-ignore
        this.representant = data;
      }, error => console.log(error));
  }
  getEtablissements():void {
    this.representantService.getEtablissment().subscribe(data=>{
      // @ts-ignore
      this.etablissement=data['content'];
    },err=>{
      console.log(err);
    })
  }
  updateRepresentant() {
    this.representantService.updateRepresentant(this.id, this.representant,this.etab)
      .subscribe(data => {
        console.log(data);
        // @ts-ignore
        //this.materiel = new Materiel();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateRepresentant();
  }

  gotoList() {
    this.router.navigate(['ListRepresentants']);
  }

}
