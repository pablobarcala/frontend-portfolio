import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProyectoComponent } from './edit-proyecto.component';

describe('EditProyectoComponent', () => {
  let component: EditProyectoComponent;
  let fixture: ComponentFixture<EditProyectoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditProyectoComponent]
    });
    fixture = TestBed.createComponent(EditProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
