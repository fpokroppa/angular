import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PartnerDetailComponent} from './partner-detail.component';
import {SurveyService} from '../_services/survey.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {AlertService} from '../_services/alert.service';
import {RouterTestingModule} from '@angular/router/testing';
import {PartnerService} from '../_services/partner.service';

describe('PartnerDetailComponent', () => {
  let component: PartnerDetailComponent;
  let fixture: ComponentFixture<PartnerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PartnerDetailComponent],
      providers: [SurveyService, AlertService, PartnerService],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
