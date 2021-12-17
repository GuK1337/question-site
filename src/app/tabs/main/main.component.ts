import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CorrectAnswerService} from "../../services/correct-answer.service";


export interface Link {
  name: string;
  path: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public links: Link[] = [{name: 'Grammar', path: 'grammar'},{name: 'Wordstock', path: 'wordstock'}];
  public activeLink:  Link | undefined;
  public correct:string[] = [];

  constructor(private router: Router, private correctPages: CorrectAnswerService) { }

  ngOnInit(): void {
    this.activeLink = this.links[0];
    this.correctPages.correct.subscribe(value => {this.correct = value;})
  }


  goToTask(link: Link): void{
    this.activeLink = link;
    this.router.navigate(['tasks', link.path]);
  }

  checkCorrect(link: string): boolean{
    return this.correctPages.isCorrect(link);
  }

}
