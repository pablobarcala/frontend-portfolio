import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaItemComponent } from './experiencia-item.component';

describe('ExperienciaItemComponent', () => {
  let component: ExperienciaItemComponent;
  let fixture: ComponentFixture<ExperienciaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciaItemComponent]
    });
    fixture = TestBed.createComponent(ExperienciaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
