import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeirdComponent } from './weird.component';

describe('WeirdComponent', () => {
  let component: WeirdComponent;
  let fixture: ComponentFixture<WeirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
