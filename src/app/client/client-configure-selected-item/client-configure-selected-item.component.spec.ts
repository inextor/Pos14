import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientConfigureSelectedItemComponent } from './client-configure-selected-item.component';

describe('ClientConfigureSelectedItemComponent', () => {
  let component: ClientConfigureSelectedItemComponent;
  let fixture: ComponentFixture<ClientConfigureSelectedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientConfigureSelectedItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientConfigureSelectedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
