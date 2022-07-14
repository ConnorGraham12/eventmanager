import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemographicComponent } from './DemographicComponent/Demographic.component';
import { CustomAuthComponent } from './auth/src/custom-auth/custom-auth.component';
import { DirectDepositUpdateComponent } from './direct-deposit-update/direct-deposit-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/src/auth.module').then(x => x.FormioAuth)
  },
  {
    path: 'demographic',
    component: DemographicComponent
  },
  {
    path: 'directDepositUpdate',
    component: DirectDepositUpdateComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
