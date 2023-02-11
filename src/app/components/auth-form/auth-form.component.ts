import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-form',
  styleUrls: ['./auth-form.component.scss'],
  templateUrl: './auth-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private _authenticationService: AuthenticationService, private _router: Router) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    if (loginForm.valid) {
      this._authenticationService.login({
        data: {
          email: loginForm.value.email,
          password: loginForm.value.password
        }
      }).subscribe({
        next: () => {
          this._router.navigate(['/success'])
        },
        error: () => {
          this._router.navigate(['/error'])
        }
       })
    }
  }

  test() {
    console.log('test')
  }
}
