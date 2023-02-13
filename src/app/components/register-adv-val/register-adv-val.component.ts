import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

export const doPasswordsMatch: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password: string = control.get('password')?.value;
  const repeatedPassword: string = control.get('repeatedPassword')?.value;

  if (!password || !repeatedPassword) {
    return null;
  }

  if (password !== repeatedPassword) {
    return { doPasswordsMatch: true };
  }

  return null;
}

@Component({
  selector: 'app-register-adv-val',
  styleUrls: ['./register-adv-val.component.scss'],
  templateUrl: './register-adv-val.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterAdvValComponent {

  readonly registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^*()])[A-Za-z\\d!@#$%^*()]{6,}$')]),
    repeatedPassword: new FormControl('', Validators.required)
  }, {validators: doPasswordsMatch});

  constructor(private _authenticationService: AuthenticationService, private _router: Router) {
  }

  onRegisterFormSubmitted(form: FormGroup): void {
    console.log(form)
    if (form.valid) {
      console.log('valid')
      this._authenticationService.register({
        data: {
          email: form.value.email,
          password: form.value.password
        }
      }).subscribe({
        next: () => {
          this._router.navigate(['/'])
        },
        error: () => {
          this._router.navigate(['/error'])
        }
      })
    }
  }
}
