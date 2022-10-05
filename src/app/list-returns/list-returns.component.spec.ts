import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReturnsComponent } from './list-returns.component';

describe('ListReturnsComponent', () => {
  let component: ListReturnsComponent;
  let fixture: ComponentFixture<ListReturnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReturnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
