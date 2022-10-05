import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportClientsComponent } from './report-clients.component';

describe('ReportClientsComponent', () => {
  let component: ReportClientsComponent;
  let fixture: ComponentFixture<ReportClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
