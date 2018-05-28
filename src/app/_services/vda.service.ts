import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const headers = new HttpHeaders();
headers.append('Accept', 'application/json;charset=UTF-8');

@Injectable()
export class VdaService {
  private url = 'http://localhost:8080/WebClientBossTestTreiber2/';

  constructor(private _http: HttpClient) {
  }

  getVdaContent(): Observable<string> {
    console.log('Headers' + headers);
    return this._http.get(this.url, {responseType: 'text', headers})
      .pipe(tap(data => console.log('All : ' + data)));
  }
}
