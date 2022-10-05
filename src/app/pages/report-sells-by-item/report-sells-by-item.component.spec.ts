import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSellsByItemComponent } from './report-sells-by-item.component';

describe('ReportSellsByItemComponent', () => {
  let component: ReportSellsByItemComponent;
  let fixture: ComponentFixture<ReportSellsByItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSellsByItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSellsByItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
