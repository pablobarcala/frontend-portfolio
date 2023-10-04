import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaInicioComponent } from './persona-inicio.component';

describe('PersonaInicioComponent', () => {
  let component: PersonaInicioComponent;
  let fixture: ComponentFixture<PersonaInicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonaInicioComponent]
    });
    fixture = TestBed.createComponent(PersonaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
