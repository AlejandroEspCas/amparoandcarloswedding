import { Component, signal } from '@angular/core';
import { ButtonComp } from './components/button-comp/button';
import { ContactsLinks } from './components/contacts-links/contacts-links';

@Component({
  selector: 'app-root',
  imports: [ButtonComp, ContactsLinks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('amparoandcarloswedding');
  onClick() {
    console.log('Clickable!!');
  }
}
