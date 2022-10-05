import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveStorageComponent } from './save-storage.component';

describe('SaveStorageComponent', () => {
  let component: SaveStorageComponent;
  let fixture: ComponentFixture<SaveStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
