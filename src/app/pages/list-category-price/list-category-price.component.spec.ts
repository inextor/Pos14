import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoryPriceComponent } from './list-category-price.component';

describe('ListCategoryPriceComponent', () => {
  let component: ListCategoryPriceComponent;
  let fixture: ComponentFixture<ListCategoryPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoryPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCategoryPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
