import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WriteVdaDirectComponent} from './write-vda-direct.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {VdaService} from '../_services/vda.service';

describe('WriteVdaDirectComponent', () => {
  let component: WriteVdaDirectComponent;
  let fixture: ComponentFixture<WriteVdaDirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WriteVdaDirectComponent],
      providers: [VdaService],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteVdaDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
