import { GroupService } from '../../services/group.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { Groups } from 'src/app/interfaces/groups-interfaces';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.sass']
})
export class OrganizationComponent {

  groups$: BehaviorSubject<Groups>;

  constructor(
    private groupService: GroupService,
    private router: Router,
    private route: ActivatedRoute,
    private socket: Socket,
    public authService: AuthService
  ) {
    this.socket.emit('getAllGroups');
    this.groups$ = this.groupService.groups;
  }

  goToCategoryEditor() {
    this.router.navigate(['group-editor'], {relativeTo: this.route})
  }

  openGroup(id: string) : void {
    this.router.navigate(['group', id], {relativeTo: this.route})
  }

  editGroup(id: string): void {
    this.router.navigate(['group-editor', id], {relativeTo: this.route})
  }

  navigateBack(): void {
    this.router.navigate(['./..'], {relativeTo: this.route})
  }
}
