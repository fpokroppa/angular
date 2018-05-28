import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Partner} from '../_models/partner';
import {PartnerService} from '../_services/partner.service';

@Component({
  selector: 'app-partner-detail',
  templateUrl: './partner-detail.component.html',
  styleUrls: ['./partner-detail.component.scss']
})
export class PartnerDetailComponent implements OnInit {

  @Input() partner: Partner;

  constructor(
    private route: ActivatedRoute,
    private partnerService: PartnerService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getPartner();
  }

  getPartner(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.partnerService.getPartner(id)
      .subscribe(partner => this.partner = partner);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.partnerService.updatePartner(this.partner)
      .subscribe(() => this.goBack());
  }
}
