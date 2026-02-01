import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts-links.component.html',
  styleUrl: './contacts-links.component.css'
})
export class ContactsLinksComponent {
  @Input() icon: 'phone' | 'email' = 'phone';
  @Input() text: string = '';
  @Input() href: string = '';
  @Input() customClass: string = '';

  get iconPath(): string {
    const icons = {
      phone: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      email: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    };
    return icons[this.icon];
  }

  get defaultHref(): string {
    if (this.href) return this.href;
    if (this.icon === 'phone') return `tel:${this.text}`;
    if (this.icon === 'email') return `mailto:${this.text}`;
    return '#';
  }
}