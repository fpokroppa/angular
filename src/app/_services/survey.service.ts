import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {AlertService} from './alert.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators'
import {ISurvey} from '../_models/isurvey';
import {throwError} from 'rxjs/internal/observable/throwError';


//const headers = { 'Authorization': 'secret' };
const headers = {'Accept': 'application/json;charset=UTF-8'};

@Injectable()
export class SurveyService {
  bankinformationUrl = 'http://localhost:8080/isg/backend/api/v1/facilities/getBankinformation?blz=';

  constructor(private _http: HttpClient, private alertService: AlertService) {
  }

  getBankInfo(bankText): Observable<ISurvey> {
    return this._http.get<ISurvey>(this.bankinformationUrl + bankText, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', 'what a F*ck');
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    }
}

