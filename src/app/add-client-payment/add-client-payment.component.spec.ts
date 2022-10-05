import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClientPaymentComponent } from './add-client-payment.component';

describe('AddClientPaymentComponent', () => {
  let component: AddClientPaymentComponent;
  let fixture: ComponentFixture<AddClientPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClientPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClientPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
