import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTecnologiasComponent } from './add-tecnologias.component';

describe('AddTecnologiasComponent', () => {
  let component: AddTecnologiasComponent;
  let fixture: ComponentFixture<AddTecnologiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTecnologiasComponent]
    });
    fixture = TestBed.createComponent(AddTecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
