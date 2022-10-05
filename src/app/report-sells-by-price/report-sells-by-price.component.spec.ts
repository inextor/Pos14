import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSellsByPriceComponent } from './report-sells-by-price.component';

describe('ReportSellsByPriceComponent', () => {
  let component: ReportSellsByPriceComponent;
  let fixture: ComponentFixture<ReportSellsByPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSellsByPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSellsByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
