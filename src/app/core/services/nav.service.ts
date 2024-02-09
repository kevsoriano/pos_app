import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  appDrawer$ = new BehaviorSubject<boolean>(true);
  phonePortrait$ = new BehaviorSubject<boolean>(false);
  tabletPortrait$ = new BehaviorSubject<boolean>(false);

  public toggleNav(val: boolean) {
    this.appDrawer$.next(val);
  }

  public togglePhonePortrait(val: boolean) {
    this.phonePortrait$.next(val);
    this.tabletPortrait$.next(!val);
  }

  public toggleTabletPortrait(val: boolean) {
    this.tabletPortrait$.next(val);
    this.phonePortrait$.next(!val);
  }

  public isWebPortrait() {
    this.tabletPortrait$.next(false);
    this.phonePortrait$.next(false);
  }
}
