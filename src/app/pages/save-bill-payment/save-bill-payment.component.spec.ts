import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBillPaymentComponent } from './save-bill-payment.component';

describe('SaveBillPaymentComponent', () => {
  let component: SaveBillPaymentComponent;
  let fixture: ComponentFixture<SaveBillPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveBillPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveBillPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
