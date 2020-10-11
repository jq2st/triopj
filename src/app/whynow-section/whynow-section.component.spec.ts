import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhynowSectionComponent } from './whynow-section.component';

describe('WhynowSectionComponent', () => {
  let component: WhynowSectionComponent;
  let fixture: ComponentFixture<WhynowSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhynowSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhynowSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
