import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCommandaComponent } from './list-commanda.component';

describe('ListCommandaComponent', () => {
  let component: ListCommandaComponent;
  let fixture: ComponentFixture<ListCommandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCommandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCommandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
