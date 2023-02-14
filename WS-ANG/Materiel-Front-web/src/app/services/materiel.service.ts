import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Materiel} from "../models/materiel";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Materiels} from "../models/materiels";

@Injectable({
  providedIn: 'root'
})
export class MaterielService {
  public host:string="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public getMateriels(page:number) {
    return this.http.get(this.host+"/materiel?page="+page)

  }
  public getMateriel(id:number){
    return this.http.get(this.host+"/materiels/"+id)

  }
  public getMaterielsByEtablissment(page:number,id:number){
    return this.http.get(this.host+"/materielbyetablissement/"+id+"?page="+page)

  }
  public getEtablissment(){
    return this.http.get(this.host+"/etablissements")
  }
  public getEtablissmentById(id:number){
    return this.http.get(this.host+"/etablissements/"+id)
  }
  public getCategorie(){
    return this.http.get(this.host+"/categories")
  }
  public getType(){
    return this.http.get(this.host+"/types")
  }
  createMateriel(materiel: Object): Observable<Object> {
    return this.http.post(`${this.host+"/materiels"}`, materiel);
  }

  updateMateriel(id: number,value: any): Observable<Object> {
    return this.http.put(`${this.host+"/materiels"}/${id}`, value);
  }

  deleteMateriel(id: number) {
    return this.http.delete(this.host+"/materiel/"+id);
  }

}
