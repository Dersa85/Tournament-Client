import { MatDialog } from '@angular/material/dialog';
import { GroupsService } from './../../services/groups.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Groups } from 'src/app/interfaces/groups-interfaces';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.sass']
})
export class OrganizationComponent {

  groups$: BehaviorSubject<Groups>;

  constructor(
    private groupService: GroupsService,
    private router: Router,
    private route: ActivatedRoute,
    private socket: Socket
  ) {
    this.socket.emit('getAllGroups');
    this.groups$ = this.groupService.groups;
  }

  goToCategoryEditor() {
    this.router.navigate(['group-editor'], {relativeTo: this.route})
  }

  openGroup(id: string) : void {
    console.log(id);
    
  }
}
