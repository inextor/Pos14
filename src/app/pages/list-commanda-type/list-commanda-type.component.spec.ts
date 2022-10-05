import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommandaTypeComponent } from './list-commanda-type.component';

describe('ListCommandaTypeComponent', () => {
  let component: ListCommandaTypeComponent;
  let fixture: ComponentFixture<ListCommandaTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommandaTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCommandaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
