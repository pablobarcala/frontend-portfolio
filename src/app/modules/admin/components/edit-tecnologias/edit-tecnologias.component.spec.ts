import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTecnologiasComponent } from './edit-tecnologias.component';

describe('EditTecnologiasComponent', () => {
  let component: EditTecnologiasComponent;
  let fixture: ComponentFixture<EditTecnologiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTecnologiasComponent]
    });
    fixture = TestBed.createComponent(EditTecnologiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
