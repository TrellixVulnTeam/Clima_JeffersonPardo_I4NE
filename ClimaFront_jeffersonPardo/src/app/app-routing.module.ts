import { NgModule } from '@angular/core';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guards/auth.guard'

const routes: Routes = [

  {
      path: '',
      component: LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: '/clima',
          pathMatch: 'full',
        },
        {
          path: 'home',
          loadChildren: () => import ('./home/home.module').then (m => m.HomeModule)
        },
        {
          path: 'clima',
          canActivate: [AuthGuard],
          loadChildren: () => import ('./clima/clima.module').then (m => m.ClimaModule)
        }
      ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
