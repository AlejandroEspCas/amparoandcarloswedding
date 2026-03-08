import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTextComponent } from '../../components/dynamic-text/dynamic-text.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-dialog-box',
  imports: [CommonModule, DynamicTextComponent, ReactiveFormsModule],
  templateUrl: './dialog-box.html',
  styleUrl: './dialog-box.css',
})
export class DialogBox {
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
    if (this.form.valid) {
      if (this.form.get('asistencia')?.value === 'no') {
        this.form.patchValue({ invitados: '0', alergias: '' });
      }
      emailjs
        .send('service_r6bjx7k', 'template_77oxcli', this.form.value, {
          publicKey: 'bZc5bGOdEtc7F2ugI',
        })
        .then(() => {
          console.log('Sent!');
        });
      this.dialogRef.close(this.form.value);
      // console.log(this.form.value);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
