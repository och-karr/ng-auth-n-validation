import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RegisterAdvValComponent} from './components/register-adv-val/register-adv-val.component';
import {RegisterAdvValComponentModule} from './components/register-adv-val/register-adv-val.component-module';
import {AuthenticationServiceModule} from './services/authentication.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'register-adv',
    component: RegisterAdvValComponent
  }]), RegisterAdvValComponentModule, AuthenticationServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
