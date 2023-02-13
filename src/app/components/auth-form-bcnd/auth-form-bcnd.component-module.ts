import { NgModule } from '@angular/core';
import { AuthFormBcndComponent } from './auth-form-bcnd.component';
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    MatCardModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    RouterLink
  ],
  declarations: [AuthFormBcndComponent],
  providers: [],
  exports: [AuthFormBcndComponent]
})
export class AuthFormBcndComponentModule {
}
