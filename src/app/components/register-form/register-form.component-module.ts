import { NgModule } from '@angular/core';
import { RegisterFormComponent } from './register-form.component';
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  imports: [
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatTabsModule
  ],
  declarations: [RegisterFormComponent],
  providers: [],
  exports: [RegisterFormComponent]
})
export class RegisterFormComponentModule {
}
