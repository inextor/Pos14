import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCommandaTypeComponent } from './save-commanda-type.component';

describe('SaveCommandaTypeComponent', () => {
  let component: SaveCommandaTypeComponent;
  let fixture: ComponentFixture<SaveCommandaTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveCommandaTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveCommandaTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
