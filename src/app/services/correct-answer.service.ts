import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CorrectAnswerService {

  private _correct!: Set<string>;

  public correct: Subject<string[]>

  constructor() {
    this._correct = new Set();
    this.correct = new Subject<string[]>();
  }


  isCorrect(value:string): boolean{
    return !!Array.from(this._correct).find((el)=> el === value);
  }

  addToCorrect(value: string):void {
    this._correct.add(value);
    console.log(1212)
    this.correct.next(Array.from(this._correct));
  }


}
