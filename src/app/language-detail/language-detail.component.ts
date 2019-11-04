import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.component.html',
  styleUrls: ['./language-detail.component.css']
})
export class LanguageDetailComponent implements OnInit {

  private selected_language: string;

  private input_value: string;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set language(language: number){
    this.selected_language = 'Hello'+ language
  }

  onKey(event: any){
    console.log(event.target.value);
  }

}
