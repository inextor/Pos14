import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCashClosingComponent } from './print-cash-closing.component';

describe('PrintCashClosingComponent', () => {
  let component: PrintCashClosingComponent;
  let fixture: ComponentFixture<PrintCashClosingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCashClosingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCashClosingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
