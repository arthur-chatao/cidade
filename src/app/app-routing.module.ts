import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'salvar', loadChildren: './estado/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar', loadChildren: './estado/listar/listar.module#ListarPageModule' },
  { path: 'salvar-cidade', loadChildren: './cidade/salvar/salvar.module#SalvarPageModule' },
  { path: 'listar-cidade', loadChildren: './cidade/listar/listar.module#ListarPageModule'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
