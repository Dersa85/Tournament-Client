import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject } from 'rxjs';
import { Groups } from '../interfaces/groups-interfaces';

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

  get groups() {
    return this.groups$
  }

  createNewGroup(groupName: string, group: any) {
    this.socket.emit('createNewGroup', groupName, group);
  }

}
