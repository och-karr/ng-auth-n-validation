import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthFormComponent } from './auth-form.component';
import {RouterLink} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

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
  declarations: [AuthFormComponent],
  providers: [AuthenticationService],
  exports: [AuthFormComponent]
})
export class AuthFormComponentModule {
}
