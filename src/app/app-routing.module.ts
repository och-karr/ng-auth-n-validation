import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SuccessComponentModule } from './components/success/success.component-module';
import { ErrorComponentModule } from './components/error/error.component-module';
import { AuthFormComponentModule } from './components/auth-form/auth-form.component-module';
import { RegisterFormComponentModule } from './components/register-form/register-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'success', component: SuccessComponent }, { path: 'error', component: ErrorComponent }, { path: 'auth-single-page', component: AuthFormComponent }, { path: 'register', component: RegisterFormComponent }]), SuccessComponentModule, ErrorComponentModule, AuthFormComponentModule, RegisterFormComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
