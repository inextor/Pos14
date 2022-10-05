import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCashCloseComponent } from './list-cash-close.component';

describe('ListCashCloseComponent', () => {
  let component: ListCashCloseComponent;
  let fixture: ComponentFixture<ListCashCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCashCloseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCashCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
