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

  selectedLanguage: number;

  constructor(languageservice: LanguageService) {
    this.languageservice = languageservice
  }

  ngOnInit() {
    // this.languages = this.languageservice.getservices();
    this.languageservice.getLanguagesHttp().subscribe((data)=>{
      this.languages = data.data;
    }
    )
  }

  onclick(id: number):void{
    this.selectedLanguage = id;
  }

}
