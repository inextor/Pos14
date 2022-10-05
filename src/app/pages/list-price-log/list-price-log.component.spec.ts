import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPriceLogComponent } from './list-price-log.component';

describe('ListPriceLogComponent', () => {
  let component: ListPriceLogComponent;
  let fixture: ComponentFixture<ListPriceLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPriceLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPriceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
