import { Injectable } from '@angular/core';
import { Learn } from './learn';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languages = [
    new Learn(1, 'Java教程'), new Learn(2, 'Python教程'), new Learn(3, 'JavaScript教程'), new Learn(4, 'SQL教程'), new Learn(1, 'Git教程'),
  ];

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

  getservices(): Learn[] {
    return this.languages;
  }

  getLanguagesHttp(): any {
    return this.http.get('http://localhost:5000');
  }

}
