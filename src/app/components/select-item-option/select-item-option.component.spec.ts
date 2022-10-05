import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectItemOptionComponent } from './select-item-option.component';

describe('SelectItemOptionComponent', () => {
  let component: SelectItemOptionComponent;
  let fixture: ComponentFixture<SelectItemOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectItemOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectItemOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
