import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeOrderReturnComponent } from './make-order-return.component';

describe('MakeOrderReturnComponent', () => {
  let component: MakeOrderReturnComponent;
  let fixture: ComponentFixture<MakeOrderReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeOrderReturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeOrderReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
