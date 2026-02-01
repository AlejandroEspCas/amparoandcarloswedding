import { Component, inject, signal } from '@angular/core';
import { ButtonComp } from './components/button-comp/button.component';
import { ContactsLinks } from './components/contacts-links/contacts-links.component';
import { Section1Component } from './sections/section-1/section-1.component';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { Section2HistoryComponent } from './sections/section-2-history/section-2-history.component';
import { Section3GalleryComponent } from './sections/section-3-gallery/section-3-gallery.component';
import { Section4DescriptionComponent } from './sections/section-4-description/section-4-description.component';
import { Section5ScheduleComponent } from './sections/section-5-schedule/section-5-schedule.component';

@Component({
  selector: 'app-root',
  imports: [
    Section1Component,
    Section2HistoryComponent,
    Section3GalleryComponent,
    Section4DescriptionComponent,
    Section5ScheduleComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class App {
  private translate = inject(TranslateService); 

  constructor() {
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('es');

    // BROWSER LANGUAGE
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|es/) ? browserLang : 'es');
  }
  
  protected readonly title = signal('amparoandcarloswedding');
  onClick() {
    console.log('Clickable!!');

    const currentLang = this.translate.currentLang;
    this.translate.use(currentLang === 'es' ? 'en' : 'es');
  }
}
