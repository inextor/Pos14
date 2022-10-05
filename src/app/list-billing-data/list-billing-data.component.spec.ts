import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBillingDataComponent } from './list-billing-data.component';

describe('ListBillingDataComponent', () => {
  let component: ListBillingDataComponent;
  let fixture: ComponentFixture<ListBillingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBillingDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBillingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
