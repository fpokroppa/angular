import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PartnerComponent} from './partner.component';
import {FormsModule} from '@angular/forms';
import {SurveyService} from '../_services/survey.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {PartnerService} from '../_services/partner.service';
import {AlertService} from '../_services/alert.service';

describe('PartnerComponent', () => {
  let component: PartnerComponent;
  let fixture: ComponentFixture<PartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerComponent],
      providers: [SurveyService, PartnerService, AlertService],
      imports: [FormsModule, RouterTestingModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
