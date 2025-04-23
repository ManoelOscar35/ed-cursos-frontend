import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  
  private isLogin = new BehaviorSubject<boolean>(false);

  constructor() { }

  setIsLogin(value: boolean) {
    this.isLogin.next(value);
  }

  getIsLogin() {
    return this.isLogin.asObservable();
  }
}
