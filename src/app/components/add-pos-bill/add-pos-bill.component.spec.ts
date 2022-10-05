import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPosBillComponent } from './add-pos-bill.component';

describe('AddPosBillComponent', () => {
  let component: AddPosBillComponent;
  let fixture: ComponentFixture<AddPosBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPosBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPosBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
