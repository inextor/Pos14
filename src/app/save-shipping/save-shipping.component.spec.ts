import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveShippingComponent } from './save-shipping.component';

describe('SaveShippingComponent', () => {
  let component: SaveShippingComponent;
  let fixture: ComponentFixture<SaveShippingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveShippingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
