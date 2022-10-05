import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePreferencesComponent } from './save-preferences.component';

describe('SavePreferencesComponent', () => {
  let component: SavePreferencesComponent;
  let fixture: ComponentFixture<SavePreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavePreferencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavePreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
