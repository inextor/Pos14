import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPriceTypeComponent } from './list-price-type.component';

describe('ListPriceTypeComponent', () => {
  let component: ListPriceTypeComponent;
  let fixture: ComponentFixture<ListPriceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPriceTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPriceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
