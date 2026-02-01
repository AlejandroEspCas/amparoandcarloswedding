import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-toggle.component.html',
  styleUrl: './language-toggle.component.css'
})
export class LanguageToggleComponent {
  currentLang: string = 'es';

  constructor(private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.defaultLang || 'es';
  }

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'es' ? 'en' : 'es';
    this.translate.use(this.currentLang);
  }

  get isSpanish(): boolean {
    return this.currentLang === 'es';
  }

  get languageLabel(): string {
    return this.currentLang === 'es' ? 'ES' : 'EN';
  }
}