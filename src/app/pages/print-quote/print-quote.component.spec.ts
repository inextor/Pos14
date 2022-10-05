import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintQuoteComponent } from './print-quote.component';

describe('PrintQuoteComponent', () => {
  let component: PrintQuoteComponent;
  let fixture: ComponentFixture<PrintQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
