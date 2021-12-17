import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-team-point-scoreboard-container',
  templateUrl: './team-point-scoreboard-container.component.html',
  styleUrls: ['./team-point-scoreboard-container.component.sass']
})
export class TeamPointScoreboardContainerComponent {

  @HostListener('document:keydown.escape', ['$event'])
  keyhandler(_event: KeyboardEvent) {
    this.router.navigate(['../../../'], {relativeTo: this.route})
  }

  constructor(private router: Router, private route: ActivatedRoute) { }
  
}
