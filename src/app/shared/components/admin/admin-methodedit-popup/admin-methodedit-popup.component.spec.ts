import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMethodeditPopupComponent } from './admin-methodedit-popup.component';

describe('AdminMethodeditPopupComponent', () => {
  let component: AdminMethodeditPopupComponent;
  let fixture: ComponentFixture<AdminMethodeditPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMethodeditPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMethodeditPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
