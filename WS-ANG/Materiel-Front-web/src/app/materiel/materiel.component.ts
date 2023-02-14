import {Component, OnInit, ViewChild} from '@angular/core';

import {MaterielService} from "../services/materiel.service";

import {Materiel} from "../models/materiel";

import {Router} from "@angular/router";



@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.component.html',
  styleUrls: ['./materiel.component.css']
})
export class MaterielComponent implements OnInit {

  // @ts-ignore
  public materiels : Materiel[];
      public page:number=0;
      public pages: Array<number> | undefined;
      public id:number=0;

       // @ts-ignore
  searchValue: string  ;


  constructor(public materielService:MaterielService,public router:Router  ) { }

  ngOnInit(): void {

    this.getMateriel()
  }
  setPage(i:any,event:any){
    event.preventDefault()
    this.page=i;
    this.getMateriel();
  }

  getMateriel(){
    this.materielService.getMateriels(this.page).subscribe(data=>{

      // @ts-ignore
      this.materiels=data['content'];
      // @ts-ignore
      this.pages=new Array<number>(data['totalPages']);
    },err=>{
      console.log(err);
    })

  }
  deleteMateriel(id: number) {

    this.materielService.deleteMateriel(id)
      .subscribe(
        data => {
          console.log(data);
          this.getMateriel();
        },
        error => console.log(error));

  }

  materielDetails(id: number){
    this.router.navigate(['details', id]);
  }
  createMateriel(){
    this.router.navigate(['addMateriel']);
  }

  updateMateriel(id: number){
    this.router.navigate(['updateMateriel', id]);
  }

  getMaterielByEtablissement(id:number){
    this.materielService.getMaterielsByEtablissment(this.page,this.id).subscribe(data=>{
      // @ts-ignore
      this.materiels=data['content'];
      // @ts-ignore
      this.pages=new Array<number>(data['totalPages']);
    },err=>{
      console.log(err);
    })
  }

}
