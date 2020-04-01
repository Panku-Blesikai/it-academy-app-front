import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessRegistrationPageComponent } from './success-registration-page.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';


describe('SuccessRegistrationPageComponent', () => {
  let component: SuccessRegistrationPageComponent;
  let fixture: ComponentFixture<SuccessRegistrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [ SuccessRegistrationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
