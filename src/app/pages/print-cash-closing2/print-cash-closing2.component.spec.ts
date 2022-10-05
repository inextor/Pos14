import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCashClosing2Component } from './print-cash-closing2.component';

describe('PrintCashClosing2Component', () => {
  let component: PrintCashClosing2Component;
  let fixture: ComponentFixture<PrintCashClosing2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCashClosing2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCashClosing2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
