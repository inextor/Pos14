import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSearchReportComponent } from './stock-search-report.component';

describe('StockSearchReportComponent', () => {
  let component: StockSearchReportComponent;
  let fixture: ComponentFixture<StockSearchReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockSearchReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockSearchReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
