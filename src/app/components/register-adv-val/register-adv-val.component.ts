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

export const isDateOk: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const day: number = control.get('day')?.value;
  const month: number = control.get('month')?.value;
  const year: number = control.get('year')?.value;

  const is31DaysMonth = [1,3,5,7,8,10,12].includes(+month);
  const isLeapYear = new Date(+year, 1, 29).getDate() === 29;

  console.log('is31DaysMonth: ' + is31DaysMonth)
  console.log('isLeapYear: ' + isLeapYear)
  console.log('type of month: ' + typeof month)

  if (day && month && year && !is31DaysMonth && month !== 2) {
    console.log('1')
    return { isDateOk: 'day for this month must be less or equal than 30' };
  } else if (day && month && year && !is31DaysMonth && month === 2 && !isLeapYear) {
    console.log('2')
    return { isDateOk: 'day for this month must be less or equal than 28' };
  } else if (day && month && year && !is31DaysMonth && month === 2 && isLeapYear) {
    console.log('3')
    return { isDateOk: 'day for this month must be less or equal than 29' };
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
    repeatedPassword: new FormControl('', Validators.required),
    day: new FormControl('', [Validators.required, Validators.min(1), Validators.max(31)]),
    month: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
    year: new FormControl('', Validators.required),
  }, {validators: [doPasswordsMatch, isDateOk]});

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
