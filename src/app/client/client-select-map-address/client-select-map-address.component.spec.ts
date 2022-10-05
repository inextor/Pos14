import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSelectMapAddressComponent } from './client-select-map-address.component';

describe('ClientSelectMapAddressComponent', () => {
  let component: ClientSelectMapAddressComponent;
  let fixture: ComponentFixture<ClientSelectMapAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSelectMapAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSelectMapAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
