import { Component, OnInit } from '@angular/core';
import {CorrectAnswerService} from "../../services/correct-answer.service";

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.scss']
})
export class FirstTabComponent implements OnInit {

  constructor( private correctPages: CorrectAnswerService) { }

  public firstQu:[string,string] = ['Do', 'Does'];
  public route:string = 'grammar';


  public firstAnsw: string[] = Array<string>(5);
  public firstAnswCorrect: string[] | null = null;

  public value: string = '';

  public secondSent:string[][] = [
    ['You', 'presents', 'like?'],
    ['Your', 'does', 'decorate', 'family', 'Christmas tree?'],
    ['Have', 'you', 'do', 'near', 'snowman', 'the house?'],
    ['She', 'does', 'what', 'evening', 'do', 'the', 'in?'],
    ['You', 'see', 'do', 'snowflakes?']
  ]

  ngOnInit(): void {


  }

  submit(){
    this.correctPages.addToCorrect(this.route);
    this.firstAnswCorrect = ['Do', 'Does','Do', 'Does','Do'];

  }

}
