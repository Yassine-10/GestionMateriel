import { Component, OnInit } from '@angular/core';

import {Router} from "@angular/router";
import {EtablissementService} from "../services/etablissement.service";
import {Etablissement} from "../models/etablissement";
import {Etablissements} from "../models/etablissements";

@Component({
  selector: 'app-etablissement',
  templateUrl: './etablissement.component.html',
  styleUrls: ['./etablissement.component.css']
})
export class EtablissementComponent implements OnInit {


  // @ts-ignore
  public etablissement : Etablissements[];
  public page:number=0;
  public pages: Array<number> | undefined;
  public id:number=0;

  // @ts-ignore
  searchValue: string  ;


  constructor(public etablissementService:EtablissementService,public router:Router  ) { }

  ngOnInit(): void {

    this.getEtablissement()
  }
  setPage(i:any,event:any){
    event.preventDefault()
    this.page=i;
    this.getEtablissement();
  }

  getEtablissement(){
    this.etablissementService.getEtablissement(this.page).subscribe(data=>{

      // @ts-ignore
      this.etablissement=data['content'];
      // @ts-ignore
      this.pages=new Array<number>(data['totalPages']);
    },err=>{
      console.log(err);
    })

  }
  deleteEtablissement(id: number) {

    this.etablissementService.deleteEtablissement(id)
      .subscribe(
        data => {
          console.log(data);
          this.getEtablissement();
        },
        error => console.log(error));

  }

  etablissementDetails(id: number){
    this.router.navigate(['detailsEtablissement', id]);
  }
  createEtablissement(){
    this.router.navigate(['addEtablissement']);
  }

  updateEtablissement(id: number){
    this.router.navigate(['updateEtablissement', id]);
  }


}
