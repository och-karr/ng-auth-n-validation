import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormCommentComponent } from './form-comment.component';

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  declarations: [FormCommentComponent],
  providers: [],
  exports: [FormCommentComponent]
})
export class FormCommentComponentModule {
}
