import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {MatTabChangeEvent} from "@angular/material/tabs";

@Component({
  selector: 'app-register-form',
  styleUrls: ['./register-form.component.scss'],
  templateUrl: './register-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent {

  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private _authenticationService: AuthenticationService, private _router: Router) {
  }

  onRegisterFormSubmitted(registerForm: FormGroup): void {
    if (registerForm.valid) {
      this._authenticationService.register({
        data: {
          email: registerForm.value.email,
          password: registerForm.value.password
        }
      }).subscribe({
        next: () => {
          this._router.navigate(['/'])
        },
        error: (e) => {
          console.log(e)
          this._router.navigate(['/error'])
        }
      })
    }
  }

  changeCard(event: MatTabChangeEvent) {
    if(event.index === 0) {
      this._router.navigate(['/auth-single-page'])
    }
  }
}
