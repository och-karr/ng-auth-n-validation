import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, startWith} from "rxjs";

@Component({
  selector: 'app-form-name',
  styleUrls: ['./form-name.component.scss'],
  templateUrl: './form-name.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormNameComponent {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  readonly formNameValue: Observable<any> = this.form.controls['name'].valueChanges.pipe(startWith(''))
}
