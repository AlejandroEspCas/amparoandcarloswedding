import { Component, Input } from '@angular/core';

@Component({
  selector: 'contacts-links',
  imports: [],
  templateUrl: './contacts-links.html',
  styleUrl: './contacts-links.css',
})
export class ContactsLinks {
  @Input() iconClass: string = 'fa-solid fa-phone icon-class';
  @Input() textClass: string = 'text-class';
  @Input() text: string = '(664)361-7687';
  @Input() display: 'flex' | 'inline-flex' | 'block' = 'flex';
  @Input() gap: string = '0.5vw';
  @Input() align: 'center' | 'flex-start' | 'flex-end' = 'center';
}
