import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDialogComponent } from 'src/app/shared/dialog/login-dialog/login-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(
    private router: Router,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  toDirection(url: string) {
    this.router.navigateByUrl(url);
  }

  openLogginDialog() {
    this.dialog.open(LoginDialogComponent)
  }

}
