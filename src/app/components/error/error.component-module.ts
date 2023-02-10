import { NgModule } from '@angular/core';
import { ErrorComponent } from './error.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
    imports: [
        MatCardModule
    ],
  declarations: [ErrorComponent],
  providers: [],
  exports: [ErrorComponent]
})
export class ErrorComponentModule {
}
