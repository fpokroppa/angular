import {inject, TestBed} from '@angular/core/testing';

import {PartnerService} from './partner.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AlertService} from './alert.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('PartnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartnerService, AlertService],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
  });

  it('should be created', inject([PartnerService], (service: PartnerService) => {
    expect(service).toBeTruthy();
  }));
});
