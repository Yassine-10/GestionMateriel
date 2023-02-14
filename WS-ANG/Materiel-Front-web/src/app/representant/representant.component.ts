import { Component, OnInit } from '@angular/core';
import {Materiel} from "../models/materiel";
import {MaterielService} from "../services/materiel.service";
import {Router} from "@angular/router";
import {RepresentantService} from "../services/representant.service";
import {Representant} from "../models/representant";

@Component({
  selector: 'app-representant',
  templateUrl: './representant.component.html',
  styleUrls: ['./representant.component.css']
})
export class RepresentantComponent implements OnInit {


  // @ts-ignore
  public representants : Representant[];
  public page:number=0;
  public pages: Array<number> | undefined;
  public id:number=0;

  // @ts-ignore
  searchValue: string  ;


  constructor(public representantService:RepresentantService,public router:Router  ) { }

  ngOnInit(): void {

    this.getRepresentant()
  }
  setPage(i:any,event:any){
    event.preventDefault()
    this.page=i;
    this.getRepresentant();
  }

  getRepresentant(){
    this.representantService.getRepresentant(this.page).subscribe(data=>{

      // @ts-ignore
      this.representants=data['content'];
      // @ts-ignore
      this.pages=new Array<number>(data['totalPages']);
    },err=>{
      console.log(err);
    })

  }
  deleteRepresentant(id: number) {

    this.representantService.deleteRepresentant(id)
      .subscribe(
        data => {
          console.log(data);
          this.getRepresentant();
        },
        error => console.log(error));

  }

  representantDetails(id: number){
    this.router.navigate(['details', id]);
  }
  createRepresentant(){
    this.router.navigate(['addRepresentant']);
  }

  updateRepresentant(id: number){
    this.router.navigate(['updateRepresentant', id]);
  }
}
