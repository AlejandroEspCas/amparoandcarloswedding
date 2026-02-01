import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dynamic-text',
  templateUrl: 'dynamic-text.component.html',
  styleUrl: 'dynamic-text.component.css',
  standalone: true,
  imports: [CommonModule, FadeInDirective, TranslateModule]
  
})
export class DynamicTextComponent {
  @Input() textKey: string = '';
  @Input() type: 'h1' | 'h2' | 'h3' | 'p' = 'p';
  @Input() customClass: string = '';
}