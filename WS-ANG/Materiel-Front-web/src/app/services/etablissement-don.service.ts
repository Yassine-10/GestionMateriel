import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EtablissementDonService {
  public host:string="http://localhost:8080"

  constructor(private http:HttpClient) { }


  public getEtablissementsDon(){
    return this.http.get(this.host+"/etablissementDon")

  }
}
