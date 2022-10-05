import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveRequisitionComponent } from './save-requisition.component';

describe('SaveRequisitionComponent', () => {
  let component: SaveRequisitionComponent;
  let fixture: ComponentFixture<SaveRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveRequisitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
