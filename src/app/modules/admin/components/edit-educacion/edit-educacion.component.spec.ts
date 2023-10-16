import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducacionComponent } from './edit-educacion.component';

describe('EditEducacionComponent', () => {
  let component: EditEducacionComponent;
  let fixture: ComponentFixture<EditEducacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEducacionComponent]
    });
    fixture = TestBed.createComponent(EditEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
