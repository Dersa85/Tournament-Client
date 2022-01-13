import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { Group, Groups } from '../interfaces/groups-interfaces';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  groups$: BehaviorSubject<Groups> = new BehaviorSubject({});
  constructor(
    private socket: Socket
  ) {
    socket.on('allGroups', (groups: any) => {
      this.groups$.next(groups);
    })
  }

  get groups(): BehaviorSubject<Groups> {
    return this.groups$
  }

  createNewGroup(group: Group) {
    this.socket.emit('createNewGroup', group);
  }

}
