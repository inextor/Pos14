import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSelectCategoryComponent } from './client-select-category.component';

describe('ClientSelectCategoryComponent', () => {
  let component: ClientSelectCategoryComponent;
  let fixture: ComponentFixture<ClientSelectCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSelectCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSelectCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
