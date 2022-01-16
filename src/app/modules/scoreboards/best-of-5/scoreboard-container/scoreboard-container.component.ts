import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-scoreboard-container',
  templateUrl: './scoreboard-container.component.html',
  styleUrls: ['./scoreboard-container.component.sass']
})
export class ScoreboardContainerComponent implements OnInit {

  @HostListener('document:keydown.escape', ['$event'])
  keyhandler(_event: KeyboardEvent) {
    this.closeFullscreen() // delete?
    this.router.navigate(['../../../'], {relativeTo: this.route})
  }

  elem: any;

  constructor(
    private router: Router, private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: any
    ) { }
  
  ngOnInit(): void {
    this.elem = document.documentElement;
    this.openFullscreen();
  }
  


  openFullscreen() {
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      /* Firefox */
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      /* IE/Edge */
      this.elem.msRequestFullscreen();
    }
  }

  closeFullscreen() {
    if (document.exitFullscreen != undefined) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      /* Firefox */
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      /* Chrome, Safari and Opera */
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      /* IE/Edge */
      this.document.msExitFullscreen();
    }
  }
}
