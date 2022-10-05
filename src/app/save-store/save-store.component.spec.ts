import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveStoreComponent } from './save-store.component';

describe('SaveStoreComponent', () => {
  let component: SaveStoreComponent;
  let fixture: ComponentFixture<SaveStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
