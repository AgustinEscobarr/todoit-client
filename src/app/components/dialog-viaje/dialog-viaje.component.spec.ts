import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViajeComponent } from './dialog-viaje.component';

describe('DialogViajeComponent', () => {
  let component: DialogViajeComponent;
  let fixture: ComponentFixture<DialogViajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogViajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
