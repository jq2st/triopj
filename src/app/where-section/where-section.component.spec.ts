import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereSectionComponent } from './where-section.component';

describe('WhereSectionComponent', () => {
  let component: WhereSectionComponent;
  let fixture: ComponentFixture<WhereSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
