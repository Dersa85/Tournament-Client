import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scoreboard-container',
  templateUrl: './scoreboard-container.component.html',
  styleUrls: ['./scoreboard-container.component.sass']
})
export class ScoreboardContainerComponent {

  @HostListener('document:keydown.escape', ['$event'])
  keyhandler(_event: KeyboardEvent) {
    this.router.navigate(['../../../'], {relativeTo: this.route})
  }

  constructor(private router: Router, private route: ActivatedRoute) { }
  
}
