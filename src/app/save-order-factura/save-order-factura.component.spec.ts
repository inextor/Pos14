import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveOrderFacturaComponent } from './save-order-factura.component';

describe('SaveOrderFacturaComponent', () => {
  let component: SaveOrderFacturaComponent;
  let fixture: ComponentFixture<SaveOrderFacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveOrderFacturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveOrderFacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
