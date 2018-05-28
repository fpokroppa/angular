import {Component, OnInit} from '@angular/core';
import {SurveyService} from '../_services/survey.service';
import {ISurvey} from '../_models/isurvey';
import {AlertService} from '../_services/alert.service';


@Component({
  selector: 'app-bank-code',
  templateUrl: './bank-code.component.html',
  styleUrls: ['./bank-code.component.scss']
})
export class BankCodeComponent implements OnInit {

  bankInfo: ISurvey;
  btnText = 'Search for...';
  bankText = '10050000';
  error;
  headers: {};

  constructor(private _surveyService: SurveyService, private alertService: AlertService) {
  }

  ngOnInit() {
  }

  searchForBankCode() {
    this._surveyService.getBankInfo(this.bankText)
      .subscribe(
        (data: ISurvey) => this.bankInfo = {...data}, // success path
        error => this.error = error); // error path
  }
}


