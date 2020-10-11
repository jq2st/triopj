import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSectionComponent } from './send-section.component';

describe('SendSectionComponent', () => {
  let component: SendSectionComponent;
  let fixture: ComponentFixture<SendSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
