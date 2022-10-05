import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveBankMovementEmbededComponent } from './save-bank-movement-embeded.component';

describe('SaveBankMovementEmbededComponent', () => {
  let component: SaveBankMovementEmbededComponent;
  let fixture: ComponentFixture<SaveBankMovementEmbededComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveBankMovementEmbededComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveBankMovementEmbededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
