import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCommandaComponent } from './save-commanda.component';

describe('SaveCommandaComponent', () => {
  let component: SaveCommandaComponent;
  let fixture: ComponentFixture<SaveCommandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCommandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveCommandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
