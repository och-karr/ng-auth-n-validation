import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable, startWith} from "rxjs";

@Component({
  selector: 'app-form-age',
  styleUrls: ['./form-age.component.scss'],
  templateUrl: './form-age.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormAgeComponent {
  readonly form: FormGroup = new FormGroup({
    age: new FormControl(18, [Validators.min(18)])
  });

  readonly formAgeValue: Observable<any> = this.form.controls['age'].valueChanges.pipe(startWith('18'))
}
