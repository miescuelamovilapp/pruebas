import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  compromisosGuardados : string = ''

  constructor(){}

  ngOnInit(): void {
    this.compromisosGuardados = localStorage.getItem('compromisosguardados') || '';
  }

}