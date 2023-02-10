import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, startWith} from "rxjs";

@Component({
  selector: 'app-form-email',
  styleUrls: ['./form-email.component.scss'],
  templateUrl: './form-email.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormEmailComponent {
  readonly form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  readonly formEmailValue: Observable<any> = this.form.controls['email'].valueChanges.pipe(startWith(''))
}
