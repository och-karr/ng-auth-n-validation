import { NgModule } from '@angular/core';
import { FormAgeComponent } from './form-age.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@NgModule({
    imports: [
        MatFormFieldModule, ReactiveFormsModule, MatInputModule, CommonModule
    ],
  declarations: [FormAgeComponent],
  providers: [],
  exports: [FormAgeComponent]
})
export class FormAgeComponentModule {
}
