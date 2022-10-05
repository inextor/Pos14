import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientViewOrderComponent } from './client-view-order.component';

describe('ClientViewOrderComponent', () => {
  let component: ClientViewOrderComponent;
  let fixture: ComponentFixture<ClientViewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientViewOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
