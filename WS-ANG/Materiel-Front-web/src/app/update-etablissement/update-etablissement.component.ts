import { Component, OnInit } from '@angular/core';
import {Etablissement} from "../models/etablissement";
import {Representants} from "../models/representants";
import {ActivatedRoute, Router} from "@angular/router";
import {RepresentantService} from "../services/representant.service";
import {Villes} from "../models/villes";
import {Etablissements} from "../models/etablissements";
import {EtablissementService} from "../services/etablissement.service";
import {Ville} from "../models/materiel";

@Component({
  selector: 'app-update-etablissement',
  templateUrl: './update-etablissement.component.html',
  styleUrls: ['./update-etablissement.component.css']
})
export class UpdateEtablissementComponent implements OnInit {

  // @ts-ignore
  id: number ;
  vil:any;

  ville:Ville[]=[];


  etablissement:  Etablissement = new  Etablissement();

  constructor(private route: ActivatedRoute,private router: Router,
              private etablissementService: EtablissementService) { }

  ngOnInit() {

    this.hamid(); this.getVilles();


  }
  hamid(){
    this.etablissement=new Etablissement();
    this.id = this.route.snapshot.params['id'];


    this.etablissementService.getEtablissmentById(this.id)
      .subscribe(data => {
        console.log(data)
        // @ts-ignore
        this.etablissement = data;
      }, error => console.log(error));
  }
  getVilles():void {
    this.etablissementService.getVille().subscribe(data=>{
      // @ts-ignore
      this.ville=data['content'];
    },err=>{
      console.log(err);
    })
  }
  updateEtablissement() {
    this.etablissementService.updateEtablissement(this.id, this.etablissement,this.vil)
      .subscribe(data => {
        console.log(data);
        // @ts-ignore
        //this.materiel = new Materiel();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEtablissement();
  }

  gotoList() {
    this.router.navigate(['ListEtablissements']);
  }

}
