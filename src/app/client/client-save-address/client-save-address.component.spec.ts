import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSaveAddressComponent } from './client-save-address.component';

describe('ClientSaveAddressComponent', () => {
  let component: ClientSaveAddressComponent;
  let fixture: ComponentFixture<ClientSaveAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSaveAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSaveAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
