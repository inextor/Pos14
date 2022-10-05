import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintCommandaComponent } from './print-commanda.component';

describe('PrintCommandaComponent', () => {
  let component: PrintCommandaComponent;
  let fixture: ComponentFixture<PrintCommandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintCommandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintCommandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
