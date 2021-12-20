import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-select-image',
  templateUrl: './select-image.component.html',
  styleUrls: ['./select-image.component.scss']
})
export class SelectImageComponent implements OnInit {
  @Input() wordsList: string[] = [];
  selectedWordsList!: string[][];
  @Input() disabled: boolean = false;
  @Input() correct!: string | null;

  constructor() { }

  ngOnInit(): void {
    this.wordsList = this.shuffle(this.wordsList);
    this.selectedWordsList = [[],[],[],[],[],[],[],];
  }

  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if(this.selectedWordsList.includes(event.container.data) && event.container.data.length > 0) {
        const oldItem = event.container.data[0];
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
        transferArrayItem(
          event.container.data,
          event.previousContainer.data,
          event.container.data.findIndex(el => el === oldItem),
          event.previousContainer.data.length,
        );

      }
        else{
        transferArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
        );
      }
    }
  }

  shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }


}
