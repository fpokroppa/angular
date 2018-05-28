import { TestBed, inject } from '@angular/core/testing';
import { SurveyService } from './survey.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AlertService} from './alert.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('surveyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveyService, AlertService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
  });

  it('should be created', inject([SurveyService], (service: SurveyService) => {
    expect(service).toBeTruthy();
  }));
});
