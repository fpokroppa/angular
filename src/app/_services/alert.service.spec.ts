import {inject, TestBed} from '@angular/core/testing';
import {AlertService} from './alert.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AlertService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlertService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    });
  });

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));
});
