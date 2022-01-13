import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group} from 'src/app/interfaces/groups-interfaces';
import { Socket } from 'ngx-socket-io';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.sass']
})
export class GroupComponent implements OnInit {

  group$!: Observable<Group>;
  members$: Observable<any[]>;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private socket: Socket
    ) {
    const id: string = this.route.snapshot.params.id
    this.group$ = this.socket.fromEvent<Group>(`getGroup/${id}`)
    this.members$ = this.group$.pipe(map( (group: Group) => group.memberValuesArrays), tap(()=> console.log('TAP')))
    this.socket.emit('loadGroup', id);
  }

  ngOnInit(): void {
  }

  navigateBack(): void {
    this.router.navigate(['./../..'], {relativeTo: this.route})
  }

}

