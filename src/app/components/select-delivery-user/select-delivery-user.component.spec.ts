import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDeliveryUserComponent } from './select-delivery-user.component';

describe('SelectDeliveryUserComponent', () => {
  let component: SelectDeliveryUserComponent;
  let fixture: ComponentFixture<SelectDeliveryUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDeliveryUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectDeliveryUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
