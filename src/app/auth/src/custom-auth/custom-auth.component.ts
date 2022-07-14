import {Injectable} from '@angular/core';
import { AppConfig } from '../../../config';
import { FormioAuthService } from '../auth.service';

@Injectable()
export class CustomAuthComponent extends FormioAuthService {

  constructor() {
    super(AppConfig, {
      login: {
        form: 'user/login'
      },
      register: {
        form: 'user/register'
      }
    });
  }
}
