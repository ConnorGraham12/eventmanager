import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomAuthComponent } from './auth/src/custom-auth/custom-auth.component';
import { CustomFormioResourceService } from './auth/src/custom-formio-resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eventmanager';
  constructor(
    public auth: CustomAuthComponent,
    private router: Router,
    public resources: CustomFormioResourceService
  ) {
    this.auth.onLogin.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(['/auth/login']);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
