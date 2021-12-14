import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


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

  public links: Link[] = [{name: 'Grammar', path: 'grammar'}];
  public activeLink:  Link | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.activeLink = this.links[0];
  }


  goToTask(link: Link): void{
    this.activeLink = link;
    this.router.navigate(['tasks', link.path]);
  }
}
