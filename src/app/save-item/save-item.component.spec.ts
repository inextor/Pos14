import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveItemComponent } from './save-item.component';

describe('SaveItemComponent', () => {
  let component: SaveItemComponent;
  let fixture: ComponentFixture<SaveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
