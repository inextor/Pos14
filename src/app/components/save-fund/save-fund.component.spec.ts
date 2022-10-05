import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveFundComponent } from './save-fund.component';

describe('SaveFundComponent', () => {
  let component: SaveFundComponent;
  let fixture: ComponentFixture<SaveFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveFundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
