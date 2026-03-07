import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTextComponent } from '../../components/dynamic-text/dynamic-text.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

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

  enviar(): void {
    if (this.form.valid) {
      if (this.form.get('asistencia')?.value === 'no') {
        this.form.patchValue({ invitados: '0', alergias: '' });
      }
      this.dialogRef.close(this.form.value);
    }
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}
