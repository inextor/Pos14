import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveShippingComponent } from './receive-shipping.component';

describe('ReceiveShippingComponent', () => {
  let component: ReceiveShippingComponent;
  let fixture: ComponentFixture<ReceiveShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveShippingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceiveShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
