import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';
import { SuccessComponentModule } from './components/success/success.component-module';
import { ErrorComponentModule } from './components/error/error.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'success', component: SuccessComponent }, { path: 'error', component: ErrorComponent }]), SuccessComponentModule, ErrorComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
