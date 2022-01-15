import { Injectable } from '@angular/core';
import { Observable, Subscriber, Subscription, interval, Subject, AsyncSubject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // login is only on client
  private adminName = 'admin';
  private adminPws = 'onboard'
  
  private isCurrentLogged = new BehaviorSubject<boolean>(false);

  constructor() {
    const value = !!+(localStorage.getItem('isLogged') || '0');
    this.isCurrentLogged.next(value)
  }

  get isLogged() {
    return this.isCurrentLogged as Observable<boolean>;
  }

  login(name: string, password: string): boolean {
    if (name == this.adminName && password == this.adminPws) {
      this.isCurrentLogged.next(true);
      localStorage.setItem('isLogged', '1')
      return true;
    }
    return false;
  }

  logout() {
    this.isCurrentLogged.next(false);
    localStorage.setItem('isLogged', '0')
  }

}
