import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrderWaiterComponent } from './list-order-waiter.component';

describe('ListOrderWaiterComponent', () => {
  let component: ListOrderWaiterComponent;
  let fixture: ComponentFixture<ListOrderWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrderWaiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrderWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
