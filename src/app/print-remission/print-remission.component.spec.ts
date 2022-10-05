import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRemissionComponent } from './print-remission.component';

describe('PrintRemissionComponent', () => {
  let component: PrintRemissionComponent;
  let fixture: ComponentFixture<PrintRemissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintRemissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintRemissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
