export interface Ville {
  id:number;nom:string;
}
export interface Etablissements  {
  // @ts-ignore
  id:number;nom:string;photo:string;mail:string;donatrice:boolean;tel:string;ville:Ville;nbDeMateriel:string;

}
