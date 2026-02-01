import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-links',
  templateUrl: './contacts-links.component.html',
  styleUrl: './contacts-links.component.css',
  standalone: true,
  imports: [],
})
export class ContactsLinks {
  @Input() iconClass: string = 'fa-solid fa-phone icon-class';
  @Input() textClass: string = 'text-class';
  @Input() text: string = '(664)361-7687';
  @Input() display: 'flex' | 'inline-flex' | 'block' = 'flex';
  @Input() gap: string = '0.5vw';
  @Input() align: 'center' | 'flex-start' | 'flex-end' = 'center';
}
