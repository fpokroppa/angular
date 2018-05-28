import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {VdaService} from '../_services/vda.service';

@Component({
  selector: 'app-write-vda-direct',
  templateUrl: './write-vda-direct.component.html',
  styleUrls: ['./write-vda-direct.component.scss']
})

export class WriteVdaDirectComponent {
  constructor(@Inject(DOCUMENT) private document: any, private vdaService: VdaService ) {
    //document.write(this.vdaService.getVdaContent().toPromise());
  }
}
