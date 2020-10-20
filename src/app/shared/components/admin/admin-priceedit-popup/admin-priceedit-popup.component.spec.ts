import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPriceeditPopupComponent } from './admin-priceedit-popup.component';

describe('AdminPriceeditPopupComponent', () => {
  let component: AdminPriceeditPopupComponent;
  let fixture: ComponentFixture<AdminPriceeditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPriceeditPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPriceeditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
