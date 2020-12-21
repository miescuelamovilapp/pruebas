import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  contadorProductivas: number = 0;
  contadorUnicas: number = 0;
  contadorVisitas: number = 0;
  contadorLegales: number = 0;

  constructor(public router: Router,) { }

  ngOnInit(): void {
  }

  restar(compromiso:String)
  {
    if(compromiso === 'Productivas')
    {
      this.contadorProductivas --;
      if(this.contadorProductivas < 0)
      {
        this.contadorProductivas = 0;
      }
    }
    if(compromiso === 'Unicas')
    {
      this.contadorUnicas --;
      if(this.contadorUnicas < 0)
      {
        this.contadorUnicas = 0;
      }
    }
    if(compromiso === 'Visitas')
    {
      this.contadorVisitas --;
      if(this.contadorVisitas < 0)
      {
        this.contadorVisitas = 0;
      }
    }
    if(compromiso === 'Legales')
    {
      this.contadorLegales --;
      if(this.contadorLegales < 0)
      {
        this.contadorLegales = 0;
      }
    }
  }

  sumar(compromiso:String)
  {
    if(compromiso === 'Productivas')
    {
      this.contadorProductivas ++;
    }
    if(compromiso === 'Unicas')
    {
      this.contadorUnicas ++;
    }
    if(compromiso === 'Visitas')
    {
      this.contadorVisitas ++;
    }
    if(compromiso === 'Legales')
    {
      this.contadorLegales ++;
    }
  }

  guardarCompromisos()
  {
    localStorage.setItem('compromisosguardados', 'true');
    this.router.navigate(['/misindicadores']);
  }

}
