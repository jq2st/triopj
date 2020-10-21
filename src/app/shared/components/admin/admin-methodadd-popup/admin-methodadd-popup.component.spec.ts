import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMethodaddPopupComponent } from './admin-methodadd-popup.component';

describe('AdminMethodaddPopupComponent', () => {
  let component: AdminMethodaddPopupComponent;
  let fixture: ComponentFixture<AdminMethodaddPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMethodaddPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMethodaddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
