import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePriceTypeComponent } from './save-price-type.component';

describe('SavePriceTypeComponent', () => {
  let component: SavePriceTypeComponent;
  let fixture: ComponentFixture<SavePriceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePriceTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavePriceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
