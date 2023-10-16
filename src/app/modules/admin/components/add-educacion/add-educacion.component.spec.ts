import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEducacionComponent } from './add-educacion.component';

describe('AddEducacionComponent', () => {
  let component: AddEducacionComponent;
  let fixture: ComponentFixture<AddEducacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEducacionComponent]
    });
    fixture = TestBed.createComponent(AddEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
