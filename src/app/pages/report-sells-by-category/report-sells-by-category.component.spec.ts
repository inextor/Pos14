import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportSellsByCategoryComponent } from './report-sells-by-category.component';

describe('ReportSellsByCategoryComponent', () => {
  let component: ReportSellsByCategoryComponent;
  let fixture: ComponentFixture<ReportSellsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportSellsByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportSellsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
