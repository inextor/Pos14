import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintReturnReceiptComponent } from './print-return-receipt.component';

describe('PrintReturnReceiptComponent', () => {
  let component: PrintReturnReceiptComponent;
  let fixture: ComponentFixture<PrintReturnReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintReturnReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintReturnReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
