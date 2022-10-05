import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CConfirmOrderComponent } from './c-confirm-order.component';

describe('CConfirmOrderComponent', () => {
  let component: CConfirmOrderComponent;
  let fixture: ComponentFixture<CConfirmOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CConfirmOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CConfirmOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
