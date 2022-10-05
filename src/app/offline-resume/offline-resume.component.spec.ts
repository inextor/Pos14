import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineResumeComponent } from './offline-resume.component';

describe('OfflineResumeComponent', () => {
  let component: OfflineResumeComponent;
  let fixture: ComponentFixture<OfflineResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflineResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
