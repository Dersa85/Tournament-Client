import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-points-scoreboard-container',
  templateUrl: './team-points-scoreboard-container.component.html',
  styleUrls: ['./team-points-scoreboard-container.component.sass']
})
export class TeamPointsScoreboardContainerComponent {

  @HostListener('document:keydown.escape', ['$event'])
  keyhandler(_event: KeyboardEvent) {
    this.router.navigate(['../../../'], {relativeTo: this.route})
  }

  constructor(private router: Router, private route: ActivatedRoute) { }
  
}
