import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTextComponent } from '../../components/dynamic-text/dynamic-text.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialog-box',
  imports: [CommonModule, DynamicTextComponent, ReactiveFormsModule],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.css',
})
export class DialogBox {
  constructor(
    private toastr: ToastrService,
    private translate: TranslateService,
  ) {}

  private fb = inject(FormBuilder);

  public dialogRef = inject(MatDialogRef<DialogBox>);
  public data = inject(MAT_DIALOG_DATA);

  form = this.fb.group({
    nombre: ['', Validators.required],
    asistencia: ['', Validators.required],
    invitados: [''],
    alergias: [''],
  });

  submit(): void {
    const title = this.translate.instant('FORM.TITLE');
    const message = this.translate.instant('FORM.MESSAGE');
    const value = (window as any).emailConfig;
    if (this.form.valid) {
      if (this.form.get('asistencia')?.value === 'no') {
        this.form.patchValue({ invitados: '0', alergias: '' });
      }
      emailjs.send(value.serviceNumber, value.templateNumber, this.form.value, {
        publicKey: value.publicKey,
      });
      this.toastr.show(title, message);
      this.dialogRef.close(this.form.value);
      // console.log(this.form.value);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
