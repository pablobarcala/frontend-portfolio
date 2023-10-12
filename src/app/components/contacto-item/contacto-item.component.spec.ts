import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoItemComponent } from './contacto-item.component';

describe('ContactoItemComponent', () => {
  let component: ContactoItemComponent;
  let fixture: ComponentFixture<ContactoItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoItemComponent]
    });
    fixture = TestBed.createComponent(ContactoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
