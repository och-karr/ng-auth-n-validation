import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [
    MatButtonModule,
    RouterLink
  ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}
