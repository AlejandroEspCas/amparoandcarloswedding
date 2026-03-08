import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicImageComponent } from '../../components/dynamic-image/dynamic-image.component';
import { DynamicTextComponent } from '../../components/dynamic-text/dynamic-text.component';
import { ContactsLinksComponent } from '../../components/contacts-links/contacts-links.component';
import { DialogBox } from '../dialog-box/dialog-box';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-section-8-footer',
  templateUrl: 'section-8-footer.component.html',
  styleUrl: 'section-8-footer.component.css',
  standalone: true,
  imports: [CommonModule, DynamicImageComponent, DynamicTextComponent, ContactsLinksComponent],
})
export class Section8FooterComponent {
  title = 'dialog';
  private dialog = inject(MatDialog);

  openDialog(): void {
    const dialogConfig: MatDialogConfig = {
      maxHeight: '100vh',
      maxWidth: '100vh',
    };
    this.dialog.open(DialogBox, dialogConfig);
  }
}
