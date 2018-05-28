import { TestBed, inject } from '@angular/core/testing';

import { VdaService } from './vda.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('VdaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VdaService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([VdaService], (service: VdaService) => {
    expect(service).toBeTruthy();
  }));
});
