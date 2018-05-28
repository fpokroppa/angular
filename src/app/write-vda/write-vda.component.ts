import {Component, OnInit, SecurityContext} from '@angular/core';
import {VdaService} from '../_services/vda.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-write-vda',
  templateUrl: './write-vda.component.html',
  styleUrls: ['./write-vda.component.scss']
})
export class WriteVdaComponent implements OnInit {
  content;

  constructor(private vdaService: VdaService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.readContent();
  }

  readContent(): void {
    this.content = this.vdaService.getVdaContent()
      .subscribe(content => this.content = content);
  }

  getSafeHtml(): SafeHtml {
    return this.sanitizer.sanitize(SecurityContext.HTML, this.sanitizer.bypassSecurityTrustHtml(this.content));
  }
}
