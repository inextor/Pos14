import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCommandaComponent } from './view-commanda.component';

describe('ViewCommandaComponent', () => {
  let component: ViewCommandaComponent;
  let fixture: ComponentFixture<ViewCommandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCommandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCommandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
