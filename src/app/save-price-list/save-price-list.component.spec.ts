import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePriceListComponent } from './save-price-list.component';

describe('SavePriceListComponent', () => {
  let component: SavePriceListComponent;
  let fixture: ComponentFixture<SavePriceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePriceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavePriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
