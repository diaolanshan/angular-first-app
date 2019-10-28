import { Component, OnInit } from '@angular/core';
import { Learn } from './learn'
import { LanguageService } from './language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  languageservice: LanguageService;

  languages: Learn[];

  constructor(languageservice: LanguageService) { 
    this.languageservice = languageservice
  }

  ngOnInit() {
    this.languages = this.languageservice.getservices();
  }

  onclick(id: number):void{
    console.log(id)
  }

}
