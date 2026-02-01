import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-dynamic-image',
  templateUrl: 'dynamic-image.component.html',
  styleUrl: 'dynamic-image.component.css',
  standalone: true,
  imports: [CommonModule, FadeInDirective],
})
export class DynamicImageComponent {
  @Input() src: string = '';
  @Input() altKey: string = '';
  @Input() containerClass: string = '';
  @Input() imageClass: string = 'w-full h-auto object-cover';
}