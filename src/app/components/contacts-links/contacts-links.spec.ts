import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsLinks } from './contacts-links';

describe('ContactsLinks', () => {
  let component: ContactsLinks;
  let fixture: ComponentFixture<ContactsLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsLinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsLinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
