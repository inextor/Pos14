import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveStockRecordComponent } from './save-stock-record.component';

describe('SaveStockRecordComponent', () => {
  let component: SaveStockRecordComponent;
  let fixture: ComponentFixture<SaveStockRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveStockRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveStockRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
