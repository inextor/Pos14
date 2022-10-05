import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCashCloseComponent } from './save-cash-close.component';

describe('SaveCashCloseComponent', () => {
  let component: SaveCashCloseComponent;
  let fixture: ComponentFixture<SaveCashCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCashCloseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveCashCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
