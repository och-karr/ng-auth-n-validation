import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormNameComponent} from './components/form-name/form-name.component';
import {FormAgeComponent} from './components/form-age/form-age.component';
import {FormEmailComponent} from './components/form-email/form-email.component';
import {FormCommentComponent} from './components/form-comment/form-comment.component';
import {SuccessComponent} from './components/success/success.component';
import {ErrorComponent} from './components/error/error.component';
import {AuthFormComponent} from './components/auth-form/auth-form.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {AuthFormBcndComponent} from './components/auth-form-bcnd/auth-form-bcnd.component';
import {RegisterAdvValComponent} from './components/register-adv-val/register-adv-val.component';
import {HomeComponent} from './components/home/home.component';
import {FormNameComponentModule} from './components/form-name/form-name.component-module';
import {FormAgeComponentModule} from './components/form-age/form-age.component-module';
import {FormEmailComponentModule} from './components/form-email/form-email.component-module';
import {FormCommentComponentModule} from './components/form-comment/form-comment.component-module';
import {SuccessComponentModule} from './components/success/success.component-module';
import {ErrorComponentModule} from './components/error/error.component-module';
import {AuthFormComponentModule} from './components/auth-form/auth-form.component-module';
import {RegisterFormComponentModule} from './components/register-form/register-form.component-module';
import {AuthFormBcndComponentModule} from './components/auth-form-bcnd/auth-form-bcnd.component-module';
import {RegisterAdvValComponentModule} from './components/register-adv-val/register-adv-val.component-module';
import {AuthenticationServiceModule} from './services/authentication.service-module';
import {HomeComponentModule} from './components/home/home.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'form-1-control-name',
    component: FormNameComponent
  }, {path: 'form-1-control-age', component: FormAgeComponent}, {
    path: 'form-1-control-email',
    component: FormEmailComponent
  }, {path: 'form-1-control-comment', component: FormCommentComponent}, {
    path: 'success',
    component: SuccessComponent
  }, {path: 'error', component: ErrorComponent}, {
    path: 'auth-single-page',
    component: AuthFormComponent
  }, {path: 'register', component: RegisterFormComponent}, {
    path: 'auth-bcnd',
    component: AuthFormBcndComponent
  }, {path: 'register-adv', component: RegisterAdvValComponent}, {
    path: '',
    component: HomeComponent
  }]), FormNameComponentModule, FormAgeComponentModule, FormEmailComponentModule, FormCommentComponentModule, SuccessComponentModule, ErrorComponentModule, AuthFormComponentModule, RegisterFormComponentModule, AuthFormBcndComponentModule, RegisterAdvValComponentModule, AuthenticationServiceModule, HomeComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
