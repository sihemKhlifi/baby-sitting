import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonneService {
  private url = environment.BASE_URL + '/abonne';
  constructor(private  httpClient: HttpClient) { }

  public register(abonne): Observable<any> {
    return this.httpClient.post(this.url , abonne);
  }
}
