import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-auth-form-bcnd',
  styleUrls: ['./auth-form-bcnd.component.scss'],
  templateUrl: './auth-form-bcnd.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormBcndComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private _authenticationService: AuthenticationService, private _router: Router, private cd: ChangeDetectorRef) {
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
        error: (err: HttpErrorResponse) => {
          this.loginForm.setErrors({
            beValidation: err.error.message
          })
          this.cd.markForCheck()
        }
      })
    }
  }
}

