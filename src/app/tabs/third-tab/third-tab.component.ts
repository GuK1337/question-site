import { Component, OnInit } from '@angular/core';
import {MatButtonToggleChange} from "@angular/material/button-toggle/button-toggle";

@Component({
  selector: 'app-third-tab',
  templateUrl: './third-tab.component.html',
  styleUrls: ['./third-tab.component.scss']
})
export class ThirdTabComponent implements OnInit {

  public emptyField!: string[];

  constructor() { }


  ngOnInit(): void {
    this.emptyField = new Array<string>(10).fill('');
  }

  changeWord(event: MatButtonToggleChange, index: number){
    this.emptyField[index] = event.value;
  }

}
