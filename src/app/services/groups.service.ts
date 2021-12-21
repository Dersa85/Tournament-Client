import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  groups$: any;
  constructor() { }

  get groups() {
    return this.groups$
  }
}
