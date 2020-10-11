import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsSectionComponent } from './methods-section.component';

describe('MethodsSectionComponent', () => {
  let component: MethodsSectionComponent;
  let fixture: ComponentFixture<MethodsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
