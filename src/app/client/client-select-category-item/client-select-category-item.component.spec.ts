import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSelectCategoryItemComponent } from './client-select-category-item.component';

describe('ClientSelectCategoryItemComponent', () => {
  let component: ClientSelectCategoryItemComponent;
  let fixture: ComponentFixture<ClientSelectCategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSelectCategoryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSelectCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
