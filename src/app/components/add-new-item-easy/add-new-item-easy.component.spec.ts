import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewItemEasyComponent } from './add-new-item-easy.component';

describe('AddNewItemEasyComponent', () => {
  let component: AddNewItemEasyComponent;
  let fixture: ComponentFixture<AddNewItemEasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewItemEasyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewItemEasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
