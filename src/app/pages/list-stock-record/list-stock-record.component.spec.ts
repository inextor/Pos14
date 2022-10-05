import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStockRecordComponent } from './list-stock-record.component';

describe('ListStockRecordComponent', () => {
  let component: ListStockRecordComponent;
  let fixture: ComponentFixture<ListStockRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStockRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStockRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
