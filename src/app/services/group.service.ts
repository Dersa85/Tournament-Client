import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { Group, Groups } from '../interfaces/groups-interfaces';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  groups$: BehaviorSubject<Groups> = new BehaviorSubject({});
  
  groupSubscription?: Subscription;

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

  editGroup(id: string, group: Group): void {
    this.socket.emit('editGroup', id, group);
  }

}
