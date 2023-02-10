import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormNameComponent} from './components/form-name/form-name.component';
import {FormAgeComponent} from './components/form-age/form-age.component';
import {FormEmailComponent} from './components/form-email/form-email.component';
import {FormCommentComponent} from './components/form-comment/form-comment.component';
import {FormNameComponentModule} from './components/form-name/form-name.component-module';
import {FormAgeComponentModule} from './components/form-age/form-age.component-module';
import {FormEmailComponentModule} from './components/form-email/form-email.component-module';
import {FormCommentComponentModule} from './components/form-comment/form-comment.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'form-1-control-name',
    component: FormNameComponent
  }, {path: 'form-1-control-age', component: FormAgeComponent}, {
    path: 'form-1-control-email',
    component: FormEmailComponent
  }, {
    path: 'form-1-control-comment',
    component: FormCommentComponent
  }]), FormNameComponentModule, FormAgeComponentModule, FormEmailComponentModule, FormCommentComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
