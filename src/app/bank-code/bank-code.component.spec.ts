import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BankCodeComponent} from './bank-code.component';
import {FormsModule} from '@angular/forms';
import {SurveyService} from '../_services/survey.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AlertService} from '../_services/alert.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('BankCodeComponent', () => {
  let component: BankCodeComponent;
  let fixture: ComponentFixture<BankCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BankCodeComponent],
      providers: [SurveyService, AlertService],
      imports: [FormsModule, HttpClientTestingModule,RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
