import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintExpensePaymentComponent } from './print-expense-payment.component';

describe('PrintExpensePaymentComponent', () => {
  let component: PrintExpensePaymentComponent;
  let fixture: ComponentFixture<PrintExpensePaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintExpensePaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintExpensePaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
