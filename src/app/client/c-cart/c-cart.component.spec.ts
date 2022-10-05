import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CCartComponent } from './c-cart.component';

describe('CCartComponent', () => {
  let component: CCartComponent;
  let fixture: ComponentFixture<CCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
