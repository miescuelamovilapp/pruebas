import { Component, OnInit } from '@angular/core';

interface EmpresariasInt {
  id: any;
  nombre: string;
  clave: string;
  impacto: number;
  checked: boolean
}

@Component({
  selector: 'app-agregarempresarias',
  templateUrl: './agregarempresarias.component.html',
  styleUrls: ['./agregarempresarias.component.css']
})
export class AgregarempresariasComponent implements OnInit {

  empresariasSeleccionadas: number = 0;
  impactoSeleccionado: number = 0;

  public empresarias: EmpresariasInt[] = [
    {
        id: '0',
        nombre: 'Lidia Fuentes',
        clave: '#234',
        impacto: 1,
        checked: false
    },
    {
        id: '1',
        nombre: 'Mario Alberto Pineda',
        clave: '#134',
        impacto: 1,
        checked: false
    },
    {
      id: '2',
      nombre: 'Yolanda Carranza',
      clave: '#534',
      impacto: 1,
      checked: false
    },
    {
      id: '3',
      nombre: 'Antonia Tellez',
      clave: '#264',
      impacto: 1,
      checked: false
    },
    {
      id: '4',
      nombre: 'Ana Maria Marquéz',
      clave: '#834',
      impacto: 1,
      checked: false
    },
    {
      id: '5',
      nombre: 'Lidia Fuentes',
      clave: '#634',
      impacto: 1,
      checked: false
    }
  ];

  public empresarias2: EmpresariasInt[] = [
    {
        id: '0',
        nombre: 'Lidia Fuentes',
        clave: '#234',
        impacto: 1,
        checked: false
    },
    {
        id: '1',
        nombre: 'Mario Alberto Pineda',
        clave: '#134',
        impacto: 1,
        checked: false
    },
    {
      id: '2',
      nombre: 'Yolanda Carranza',
      clave: '#534',
      impacto: 1,
      checked: false
    },
    {
      id: '3',
      nombre: 'Antonia Tellez',
      clave: '#264',
      impacto: 1,
      checked: false
    },
    {
      id: '4',
      nombre: 'Ana Maria Marquéz',
      clave: '#834',
      impacto: 1,
      checked: false
    },
    {
      id: '5',
      nombre: 'Lidia Fuentes',
      clave: '#634',
      impacto: 1,
      checked: false
    }
  ];

  constructor(){

  }

  ngOnInit(): void {
  }

  assignCopy(){
      this.empresarias = this.empresarias2;
  }

  filterItem(value:string){
    /*if(!value){
      this.assignCopy();
    }
    this.empresarias = Object.assign([], this.empresarias).filter(
       empresaria => new empresaria.nombre.toLowerCase().indexOf(value.toLowerCase()) > -1
    )*/
 }

 sumarImpacto(id: number, impacto: number, event:any)
 {
   this.empresarias[id].checked = event.target.checked;
   this.empresarias2[id].checked = event.target.checked;

   if(event.target.checked === true)
   {
    this.empresariasSeleccionadas++;
    this.impactoSeleccionado = this.impactoSeleccionado + impacto;
   }
   else
   {
    this.empresariasSeleccionadas--;
    this.impactoSeleccionado = this.impactoSeleccionado - impacto;
   }
   
 }

}