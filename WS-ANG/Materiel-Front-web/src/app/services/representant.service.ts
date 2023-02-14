import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RepresentantService {

  public host:string="http://localhost:8080"

  constructor(private http:HttpClient) { }

  public getRepresentant(page:number) {
    return this.http.get(this.host+"/representant?page="+page)

  }
  public getRepresentants(id:number){
    return this.http.get(this.host+"/representants/"+id)

  }

  public getEtablissment(){
    return this.http.get(this.host+"/etablissements")
  }
  public getEtablissmentById(id:number){
    return this.http.get(this.host+"/etablissements/"+id)
  }

  createRepresentant(rep: Object,idEtablissement:number): Observable<Object> {
    return this.http.post(`${this.host+"/representant"}/${idEtablissement}/`, rep);
  }

  updateRepresentant(id: number, value: any,idEtablissement:number): Observable<Object> {
    return this.http.put(`${this.host+"/representant"}/${id}/${idEtablissement}`, value);
  }

  deleteRepresentant(id: number) {
    return this.http.delete(this.host+"/representant/"+id);
  }

}
