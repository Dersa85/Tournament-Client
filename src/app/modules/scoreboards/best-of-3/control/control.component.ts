import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { BestOf3Board } from 'src/app/interfaces/boards-interfaces';
import { BoardService } from 'src/app/services/board.service';
import { first, take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket,  } from 'ngx-socket-io';
import { MatDialog } from '@angular/material/dialog';
import { DialogChangeTotalTimeComponent } from 'src/app/shared/dialog/dialog-change-total-time/dialog-change-total-time.component';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.sass']
})
export class ControlComponent {
  constructor() { }

}
