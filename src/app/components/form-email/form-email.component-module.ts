import { NgModule } from '@angular/core';
import { FormEmailComponent } from './form-email.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  declarations: [FormEmailComponent],
  providers: [],
  exports: [FormEmailComponent]
})
export class FormEmailComponentModule {
}
