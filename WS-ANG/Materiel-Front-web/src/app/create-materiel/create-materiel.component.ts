
import {Router} from "@angular/router";
import {MaterielService} from "../services/materiel.service";
import {Materiels} from "../models/materiels";
import {Component, OnInit} from "@angular/core";
import {Etablissement} from "../models/etablissement";
import {Categorie} from "../models/categorie";
import {Type} from "../models/type";
import {MaterielsDTO} from "../models/MaterielsDTO";


@Component({
  selector: 'app-create-materiel',
  templateUrl: './create-materiel.component.html',
  styleUrls: ['./create-materiel.component.css']
})
export class CreateMaterielComponent implements OnInit {


  materiel: MaterielsDTO = new MaterielsDTO();
  submitted = false;
  etab:any;
  typ:any;cat:any;


  etablissement:Etablissement[]=[];categorie:Categorie[]=[];type :Type[]=[];

  constructor(private materielService: MaterielService,
              private router: Router) { }

  ngOnInit() {
    this.getEtablissements();
    this.getCategories();
    this.getTypes();

  }
   getEtablissements():void {
          this.materielService.getEtablissment().subscribe(data=>{
          // @ts-ignore
            this.etablissement=data['content'];
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
  newMateriel(): void {
    this.submitted = false;
    this.materiel = new Materiels();
  }

  save() {

    this.materielService
      .createMateriel(this.materiel).subscribe(data => {
        console.log(data)
        this.materiel = new MaterielsDTO();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['ListMateriels']).then(r => {});
  }

}
