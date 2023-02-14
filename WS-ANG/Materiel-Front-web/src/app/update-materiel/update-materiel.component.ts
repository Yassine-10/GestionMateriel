import { Component, OnInit } from '@angular/core';
import {Materiel} from "../models/materiel";
import {ActivatedRoute, Router} from "@angular/router";
import {MaterielService} from "../services/materiel.service";
import {Materiels} from "../models/materiels";
import {Etablissement} from "../models/etablissement";
import {Categorie} from "../models/categorie";
import {Type} from "../models/type";
import {MaterielsDTO} from "../models/MaterielsDTO";

@Component({
  selector: 'app-update-materiel',
  templateUrl: './update-materiel.component.html',
  styleUrls: ['./update-materiel.component.css']
})
export class UpdateMaterielComponent implements OnInit {

  // @ts-ignore
  id: number ;
  etabdon:any;etabacc:any;
  typ:number=0;cat:any;



  // @ts-ignore
  public materiel: MaterielsDTO;
  etablissementAcc:Etablissement[]=[];etablissementDon:Etablissement[]=[];categorie:Categorie[]=[];type :Type[]=[];

  constructor(private route: ActivatedRoute,private router: Router,
              private materielService: MaterielService) { }

  ngOnInit() {

  this.hamid();
    this.getEtablissements();
    this.getCategories();
    this.getTypes();

  }
  hamid(){
    this.materiel=new MaterielsDTO();
    this.id = this.route.snapshot.params['id'];

    this.materielService.getMateriel(this.id)
      .subscribe(data => {
        console.log(data)
        // @ts-ignore
        this.materiel = data;
        this.materiel.type=0;

      }, error => console.log(error));
  }
  getEtablissements():void {
    this.materielService.getEtablissment().subscribe(data=>{
      // @ts-ignore
      this.etablissementDon=data['content'];this.etablissementAcc=data['content'];
    },err=>{
      console.log(err);
    })
  }
  getCategories():void {
    this.materielService.getCategorie().subscribe(data=>{
      // @ts-ignore
      this.categorie=data['content'];
    },err=>{
      console.log(err);
    })

  }
  getTypes():void {
    this.materielService.getType().subscribe(data=>{
      // @ts-ignore
      this.type=data['content'];
    },err=>{
      console.log(err);
    })

  }
  updateMateriel() {
    this.materielService.updateMateriel(this.id,this.materiel)
      .subscribe(data => {
        console.log(data);
        // @ts-ignore
        //this.materiel = new Materiel();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateMateriel();
  }

  gotoList() {
    this.router.navigate(['ListMateriels']);
  }
}
