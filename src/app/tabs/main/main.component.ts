import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
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

  public links: Link[] = [
    {
      name: 'Grammar',
      path: 'grammar'
    },
    {
      name: 'Wordstock',
      path: 'wordstock'
    },
    {
      name: 'Reading',
      path: 'reading'
    },
    {
      name: 'Project',
      path: 'project'
    }
  ];
  public activeLink:  Link | undefined;
  public correct:string[] = [];

  constructor(private router: Router, private correctPages: CorrectAnswerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeLink = this.links.find(el => el.path === this.router.url.split('/')[2]);
    this.correctPages.correct.subscribe(value => {this.correct = value;});
  }

  unsubscribe():void {
    this
  }

  goToTask(link: Link): void{
    this.activeLink = link;
    this.router.navigate(['tasks', link.path]);
  }

  checkCorrect(link: string): boolean{
    return this.correctPages.isCorrect(link);
  }

}
