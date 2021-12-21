import { MatDialog } from '@angular/material/dialog';
import { GroupsService } from './../../services/groups.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.sass']
})
export class OrganizationComponent {

  groups$: any;

  constructor(
    private groupService: GroupsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.groups$ = this.groupService.groups;
  }

  goToCategoryEditor() {
    this.router.navigate(['categories'], {relativeTo: this.route})
  }

}
