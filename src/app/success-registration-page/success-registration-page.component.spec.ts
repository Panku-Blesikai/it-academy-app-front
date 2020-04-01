import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRegistrationPageComponent } from './success-registration-page.component';

describe('SuccessRegistrationPageComponent', () => {
  let component: SuccessRegistrationPageComponent;
  let fixture: ComponentFixture<SuccessRegistrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessRegistrationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
