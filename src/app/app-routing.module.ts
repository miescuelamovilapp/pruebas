import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./@public/pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./@private/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'hoy',
    loadChildren: () => import('./@private/pages/desarrollodeempresarias/hoy/hoy.module').then(m => m.HoyModule)
  },
  {
    path: 'misindicadores',
    loadChildren: () => import('./@private/pages/desarrollodeempresarias/compromisos/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'agregarcompromisos',
    loadChildren: () => import('./@private/pages/desarrollodeempresarias/compromisos/agregar/agregar.module').then(m => m.AgregarModule)
  },
  {
    path: 'agregarempresarias',
    loadChildren: () => import('./@private/pages/desarrollodeempresarias/compromisos/agregarempresarias/agregarempresarias.module').then(m => m.AgregarempresariasModule)
  },
  {
    path: 'detallecompromisos',
    loadChildren: () => import('./@private/pages/desarrollodeempresarias/compromisos/detalle/detalle.module').then(m => m.DetalleModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash:true,
      scrollPositionRestoration: 'enabled'
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
