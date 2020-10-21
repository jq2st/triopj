import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPricetypeaddPopupComponent } from './admin-pricetypeadd-popup.component';

describe('AdminPricetypeaddPopupComponent', () => {
  let component: AdminPricetypeaddPopupComponent;
  let fixture: ComponentFixture<AdminPricetypeaddPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPricetypeaddPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPricetypeaddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
