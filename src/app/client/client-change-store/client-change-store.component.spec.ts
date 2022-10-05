import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientChangeStoreComponent } from './client-change-store.component';

describe('ClientChangeStoreComponent', () => {
  let component: ClientChangeStoreComponent;
  let fixture: ComponentFixture<ClientChangeStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientChangeStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientChangeStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
