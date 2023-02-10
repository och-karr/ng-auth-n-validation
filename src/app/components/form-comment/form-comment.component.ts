import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-comment',
  styleUrls: ['./form-comment.component.scss'],
  templateUrl: './form-comment.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormCommentComponent {
  readonly form: FormGroup = new FormGroup({
    comment: new FormControl('', [Validators.required, Validators.pattern('^(?:\\b\\w+\\b[\\s\\r\\n]*){4,}$')])
  });
}
