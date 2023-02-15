import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SuccessComponent } from './success.component';

@NgModule({
  imports: [MatCardModule],
  declarations: [SuccessComponent],
  providers: [],
  exports: [SuccessComponent]
})
export class SuccessComponentModule {
}
