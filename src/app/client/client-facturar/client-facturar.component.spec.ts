import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFacturarComponent } from './client-facturar.component';

describe('ClientFacturarComponent', () => {
  let component: ClientFacturarComponent;
  let fixture: ComponentFixture<ClientFacturarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientFacturarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFacturarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
