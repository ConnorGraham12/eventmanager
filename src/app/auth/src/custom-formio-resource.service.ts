import { Injectable } from '@angular/core';
import { FormioResources } from 'angular-formio/resource/resources.service';
import { CustomAuthComponent } from './custom-auth/custom-auth.component';

@Injectable({
  providedIn: 'root'
})
export class CustomFormioResourceService extends FormioResources {

  constructor(public auth: CustomAuthComponent) { super(auth) }
}
