import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AlertService} from './alert.service';
import {Observable, of} from 'rxjs';
import {Partner} from '../_models/partner';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PartnerService {

  private partnersUrl = 'api/partners';  // URL to web api

  constructor(
    private http: HttpClient,
    private alertService: AlertService) {
  }

  /** Log a PartnerService message with the MessageService */
  private log(message: string) {
    this.alertService.error('PartnerService: ' + message);
  }

  /** GET partners from the server */
  getPartners(): Observable<Partner[]> {
    console.error(this.partnersUrl);
    return this.http.get<Partner[]>(this.partnersUrl)
      .pipe(
        catchError(this.handleError('getPartners', []))
      );
  }

  /** GET hero by id. Return `undefined` when id not found */
  getPartnerNo404<Data>(id: number): Observable<Partner> {
    const url = `${this.partnersUrl}/?id=${id}`;
    return this.http.get<Partner[]>(url)
      .pipe(
        map(partners => partners[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} partner id=${id}`);
        }),
        catchError(this.handleError<Partner>(`getPartner id=${id}`))
      );
  }

  /** GET partner by id. Will 404 if id not found */
  getPartner(id: number): Observable<Partner> {
    const url = `${this.partnersUrl}/${id}`;
    return this.http.get<Partner>(url).pipe(
      tap(_ => this.log(`fetched partner id=${id}`)),
      catchError(this.handleError<Partner>(`getPartner id=${id}`))
    );
  }

  /* GET partner whose name contains search term */
  searchPartners(term: string): Observable<Partner[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Partner[]>(`api/partners/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Partner[]>('searchPartners', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new partner to the server */
  addPartner(partner: Partner): Observable<Partner> {
    return this.http.post<Partner>(this.partnersUrl, partner, httpOptions).pipe(
      tap((partner: Partner) => this.log(`added partner w/ id=${partner.id}`)),
      catchError(this.handleError<Partner>('addPArtner'))
    );
  }

  /** DELETE: delete the partner from the server */
  deletePartner(partner: Partner | number): Observable<Partner> {
    const id = typeof partner === 'number' ? partner : partner.id;
    const url = `${this.partnersUrl}/${id}`;

    return this.http.delete<Partner>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted partner id=${id}`)),
      catchError(this.handleError<Partner>('deletePartner'))
    );
  }

  /** PUT: update the partner on the server */
  updatePartner(partner: Partner): Observable<any> {
    return this.http.put(this.partnersUrl, partner, httpOptions).pipe(
      tap(_ => this.log(`updated partner id=${partner.id}`)),
      catchError(this.handleError<any>('updatepartner'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
