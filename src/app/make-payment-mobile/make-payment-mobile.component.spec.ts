import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePaymentMobileComponent } from './make-payment-mobile.component';

describe('MakePaymentMobileComponent', () => {
  let component: MakePaymentMobileComponent;
  let fixture: ComponentFixture<MakePaymentMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakePaymentMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakePaymentMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
