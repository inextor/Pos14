import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMermaComponent } from './list-merma.component';

describe('ListMermaComponent', () => {
  let component: ListMermaComponent;
  let fixture: ComponentFixture<ListMermaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMermaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
