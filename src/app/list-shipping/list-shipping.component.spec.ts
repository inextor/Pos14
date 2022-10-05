import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShippingComponent } from './list-shipping.component';

describe('ListShippingComponent', () => {
  let component: ListShippingComponent;
  let fixture: ComponentFixture<ListShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShippingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
