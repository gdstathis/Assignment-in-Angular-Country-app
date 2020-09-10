import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private readonly endpoint='https://restcountries.eu/rest/v2/';
 
  constructor(private http:HttpClient) { }

  getCountries():Observable<Country[]>{
    return this.http.get<Country[]>(this.endpoint);
  }

}