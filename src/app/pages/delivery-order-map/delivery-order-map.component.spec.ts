import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryOrderMapComponent } from './delivery-order-map.component';

describe('DeliveryOrderMapComponent', () => {
  let component: DeliveryOrderMapComponent;
  let fixture: ComponentFixture<DeliveryOrderMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryOrderMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryOrderMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
