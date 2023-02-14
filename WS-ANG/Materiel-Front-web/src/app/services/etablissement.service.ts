import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {

  public host:string="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public getEtablissement(page:number) {
    return this.http.get(this.host+"/etablissements?page="+page)

  }


  public getEtablissments(){
    return this.http.get(this.host+"/etablissements")
  }
  public getEtablissmentById(id:number){
    return this.http.get(this.host+"/etablissements/"+id)
  }
  public getCategorie(){
    return this.http.get(this.host+"/categories")
  }
  public getVille(){
    return this.http.get(this.host+"/villes")
  }
  createEtablissement(etab: Object,idVille:number): Observable<Object> {
    return this.http.post(`${this.host+"/etablissement"}/${idVille}`, etab);
  }

  updateEtablissement(id: number, value: any,idVille:number): Observable<Object> {
    return this.http.put(`${this.host+"/etablissement"}/${id}/${idVille}`, value);
  }

  deleteEtablissement(id: number) {
    return this.http.delete(this.host+"/etablissement/"+id);
  }
}
