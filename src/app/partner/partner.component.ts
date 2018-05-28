import {Component, OnInit} from '@angular/core';
import {Partner} from '../_models/partner';
import {PartnerService} from '../_services/partner.service';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.scss']
})
export class PartnerComponent implements OnInit {

  partners: Partner[];
  selectedPartner: Partner;

  constructor(private partnerService: PartnerService ) {
  }

  ngOnInit() {
    this.getPartners();
  }

  onSelect(partner: Partner): void {
    this.selectedPartner = partner;
  }

  getPartners(): void {
    this.partnerService.getPartners()
        .subscribe(partners => this.partners = partners);
  }

  add(firstname: string, lastname: string): void {
    firstname = firstname.trim();
    lastname = lastname.trim();
    if (!firstname || !lastname) { return; }
    this.partnerService.addPartner({ firstname, lastname } as Partner)
      .subscribe(partner => {
        this.partners.push(partner);
      });
  }

  delete(partner: Partner): void {
    this.partners = this.partners.filter(h => h !== partner);
    this.partnerService.deletePartner(partner).subscribe();
  }

}
