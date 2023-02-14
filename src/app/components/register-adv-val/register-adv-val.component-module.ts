import { NgModule } from '@angular/core';
import { RegisterAdvValComponent } from './register-adv-val.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  imports: [
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule
  ],
  declarations: [RegisterAdvValComponent],
  providers: [],
  exports: [RegisterAdvValComponent]
})
export class RegisterAdvValComponentModule {
}
