import { Injectable } from '@angular/core';
import { Learn } from './learn'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  languages = [
    new Learn(1, 'Java教程'), new Learn(2, 'Python教程'), new Learn(3, 'JavaScript教程'), new Learn(4, 'SQL教程'), new Learn(1, 'Git教程'),
  ]

  constructor() { }

  getservices(): Learn[]{
    return this.languages
  }

}
