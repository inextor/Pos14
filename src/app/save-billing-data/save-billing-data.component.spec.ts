import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBillingDataComponent } from './save-billing-data.component';

describe('SaveBillingDataComponent', () => {
  let component: SaveBillingDataComponent;
  let fixture: ComponentFixture<SaveBillingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveBillingDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveBillingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
