import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteVdaComponent } from './write-vda.component';
import {VdaService} from '../_services/vda.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('WriteVdaComponent', () => {
  let component: WriteVdaComponent;
  let fixture: ComponentFixture<WriteVdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteVdaComponent ],
      providers: [VdaService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteVdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
