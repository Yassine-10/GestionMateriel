import { Component, OnInit } from '@angular/core';
import {EtablissementDonService} from "../services/etablissement-don.service";
@Component({
  selector: 'app-etablissement-don',
  templateUrl: './etablissement-don.component.html',
  styleUrls: ['./etablissement-don.component.css']
})
export class EtablissementDonComponent implements OnInit {
  public etablissements : Array<any> | undefined;
  constructor(public etablissementDonService:EtablissementDonService) { }

  ngOnInit(): void {
    this.etablissementDonService.getEtablissementsDon().subscribe(data=>{
      // @ts-ignore
      this.etablissement=data['content'];
    },err=>{
      console.log(err);
    })
  }

}
