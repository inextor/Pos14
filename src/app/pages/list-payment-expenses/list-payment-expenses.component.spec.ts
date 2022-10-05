import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPaymentExpensesComponent } from './list-payment-expenses.component';

describe('ListPaymentExpensesComponent', () => {
  let component: ListPaymentExpensesComponent;
  let fixture: ComponentFixture<ListPaymentExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPaymentExpensesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPaymentExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
