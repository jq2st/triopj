import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPriceaddPopupComponent } from './admin-priceadd-popup.component';

describe('AdminPriceaddPopupComponent', () => {
  let component: AdminPriceaddPopupComponent;
  let fixture: ComponentFixture<AdminPriceaddPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPriceaddPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPriceaddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
