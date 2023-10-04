import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiaItemComponent } from './tecnologia-item.component';

describe('TecnologiaItemComponent', () => {
  let component: TecnologiaItemComponent;
  let fixture: ComponentFixture<TecnologiaItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecnologiaItemComponent]
    });
    fixture = TestBed.createComponent(TecnologiaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
