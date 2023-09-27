import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionesComponent } from './educaciones.component';

describe('EducacionesComponent', () => {
  let component: EducacionesComponent;
  let fixture: ComponentFixture<EducacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducacionesComponent]
    });
    fixture = TestBed.createComponent(EducacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
