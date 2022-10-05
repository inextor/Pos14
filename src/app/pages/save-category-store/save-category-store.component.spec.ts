import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCategoryStoreComponent } from './save-category-store.component';

describe('SaveCategoryStoreComponent', () => {
  let component: SaveCategoryStoreComponent;
  let fixture: ComponentFixture<SaveCategoryStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCategoryStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveCategoryStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
