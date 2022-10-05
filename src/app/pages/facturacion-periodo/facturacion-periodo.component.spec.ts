import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionPeriodoComponent } from './facturacion-periodo.component';

describe('FacturacionPeriodoComponent', () => {
  let component: FacturacionPeriodoComponent;
  let fixture: ComponentFixture<FacturacionPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturacionPeriodoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturacionPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
