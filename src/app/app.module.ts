import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemographicComponent } from './DemographicComponent/Demographic.component'
import { FormioModule } from 'angular-formio';
import { CustomAuthComponent } from './auth/src/custom-auth/custom-auth.component';
import { CustomFormioResourceService } from './auth/src/custom-formio-resource.service';

import { AppConfig } from './config';
import { FormioAppConfig } from '@formio/angular';
import { DirectDepositUpdateComponent } from './direct-deposit-update/direct-deposit-update.component';

@Injectable({providedIn: 'root'})
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemographicComponent,
    DirectDepositUpdateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormioModule
  ],
  providers: [
    { provide: FormioAppConfig, useValue: AppConfig },
    CustomFormioResourceService,
    CustomAuthComponent,
  ],
  
  bootstrap: [AppComponent],
 

})
export class AppModule { }
