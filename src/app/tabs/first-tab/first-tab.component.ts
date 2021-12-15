import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-tab',
  templateUrl: './first-tab.component.html',
  styleUrls: ['./first-tab.component.scss']
})
export class FirstTabComponent implements OnInit {

  constructor() { }

  public firstQu:[string,string] = ['Do', 'Does'];


  public firstAnsw: string[] = Array<string>(5);

  public value: string = '';

  public correctfirstAnsw:string[] = [
    'Does',
    'Do',
    'Do',
    'Do',
    'Do',
    'Do',
  ]

  ngOnInit(): void {
  }

}
